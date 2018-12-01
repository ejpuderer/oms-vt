import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { CartItem } from 'src/app/models/cartItem.model';
import { OrderHistory } from 'src/app/models/orderHistory.model';
import { Order } from 'src/app/models/order.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  userId: String;
  shoppingCart: CartItem[];
  orderHistory: OrderHistory;

  constructor(private ecomService: EcommerceService, private router: Router) { }

  ngOnInit() {
    console.log('shopping cart start')
    this.userId = this.ecomService.getAppService().getCookieService().get('uid');
    console.log('userId: ' + this.userId);
    
    this.shoppingCart = this.ecomService.getCart();
    this.ecomService.shoppingCartSub.subscribe(
      (cart) => this.shoppingCart = cart
    )
    this.orderHistory = new OrderHistory(null);

    if (this.userId) {
      this.ecomService.getAppService().getDocFromDB<OrderHistory>(OrderHistory.prototype, this.userId.toString()).subscribe(
        (doc: OrderHistory) => {
          const tmpOrders: Order[] = [];
          if (doc) {
            for (let order of doc.orders) {
              let any = new Object(order);
              let inneritem = new Order({ orderDate: new Date(any['orderDate'].seconds * 1000), orderItems: order.orderItems });
              tmpOrders.push(inneritem)
            }
          }
          this.orderHistory.orders = tmpOrders;
        }
      )
    }
  }

  submitOrder() {
    this.orderHistory.orders.push(new Order({orderDate: new Date(), orderItems: this.shoppingCart }))
    this.ecomService.getAppService().updateDatabase<OrderHistory>(this.userId.toString(), OrderHistory.prototype, 
      { orders: this.orderHistory.toJSON() }).then(
      () => {
          this.shoppingCart = [];
          this.ecomService.getAppService().cartItemCount.next(0);
          this.ecomService.showMessage('Thank you for your order');
          this.router.navigateByUrl('/e-commerce')
      }
  );
  }

  removeItem(index: number) {
    this.ecomService.removeItem(index);
  }

  changeQuantity(index: number, quantity: number) {
    this.ecomService.changeQuantity(index, quantity);
  }

}
