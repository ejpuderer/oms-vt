import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { CartItem } from 'src/app/models/cartItem.model';
import { OrderHistory } from 'src/app/models/orderHistory.model';
import { Order } from 'src/app/models/order.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AddressList } from 'src/app/models/addressList.model';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  userId: String;
  shoppingCart: CartItem[];
  addressList: AddressList;
  orderHistory: OrderHistory;
  shipTo: Address;

  constructor(private ecomService: EcommerceService, private router: Router) { }

  ngOnInit() {
    this.userId = this.ecomService.getAppService().getCookieService().get('uid');
    
    this.shoppingCart = this.ecomService.getCart();
    this.ecomService.shoppingCartSub.subscribe(
      (cart) => this.shoppingCart = cart
    )
    this.orderHistory = new OrderHistory(null);
    this.addressList = new AddressList(null);

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

      this.ecomService.getAppService().getDocFromDB<AddressList>(AddressList.prototype, this.userId.toString()).subscribe(
        (doc: AddressList) => {
          const tmpAddr: Address[] = [];
          if (doc) {
            for (let addr of doc.addressList) {
              tmpAddr.push(new Address(addr['address']));
            }
          }          
          this.addressList.addressList = tmpAddr;
        }
      )
    }
  }

  submitOrder() {
    this.orderHistory.orders.push(new Order({orderDate: new Date(), shipTo: this.shipTo, orderItems: this.shoppingCart }))
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

  getTotal() {
    let total = 0;
    for (let item of this.shoppingCart) {
      total += item.quantity * item.item.price
    }
    return total;
  }

}
