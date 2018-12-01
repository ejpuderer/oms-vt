import { Injectable, OnInit } from "@angular/core";
import { CartItem } from "../models/cartItem.model";
import { Subject } from "rxjs";
import { ForSale } from "../models/forsale.model";
import { UIService } from "../shared/ui.service";
import { AppService } from "../app.service";
import { OrderHistory } from "../models/orderHistory.model";
import { Order } from "../models/order.model";

@Injectable()
export class EcommerceService {

    shoppingCart: CartItem[] = [];
    shoppingCartSub: Subject<CartItem[]> = new Subject();
    
    constructor(private uiService: UIService, private appService: AppService) { }

    getAppService() {
        return this.appService;
    }

    getCart() {
        return this.shoppingCart;
    }

    showMessage(message: string) {
        this.uiService.showSnackbar(message, null, 3000);
    }

    addCartItem(forSale: ForSale, quantity: number) {
        if (this.shoppingCart.findIndex((sci) => sci.item.name == forSale.name) !== -1) {
            this.showMessage('That item is already in your shopping cart');
        } else {
            this.shoppingCart.push(new CartItem({ quantity: quantity, item: forSale }))
            this.shoppingCartSub.next(this.shoppingCart);
            this.appService.cartItemCount.next(this.shoppingCart.length);
        }
    }

    changeQuantity(index: number, quantity: number) {
        this.shoppingCart[index].quantity = quantity;
        this.shoppingCartSub.next(this.shoppingCart);
    }

    removeItem(index: number) {
        this.shoppingCart.splice(index, 1);
        this.shoppingCartSub.next(this.shoppingCart);
        this.appService.cartItemCount.next(this.shoppingCart.length);
    }
    
}