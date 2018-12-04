import { Component } from '@angular/core';
import { OrderHistory } from 'src/app/models/orderHistory.model';
import { Order } from 'src/app/models/order.model';
import { CartItem } from 'src/app/models/cartItem.model';
import { ForSale } from 'src/app/models/forsale.model';
import { AccountBase } from '../account-base';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent extends AccountBase<OrderHistory> {

  getType() {
    return OrderHistory.prototype;
  }

  populateList(doc: OrderHistory) {
    this.userDoc = new OrderHistory(null);
    const tmpListItems: Order[] = [];

    for (let order of doc.orders) {
      let any = new Object(order);
      const items: CartItem[] = [];
      for (let item of order.orderItems) {
        items.push(new CartItem({ quantity: item.quantity, item: new ForSale({ ...item.item }) }))
      }
      let inneritem = new Order({ orderDate: new Date(any['orderDate'].seconds * 1000), shipTo: new Address({...order.shipTo}),
      orderItems: items });
      tmpListItems.push(inneritem)
    }
    this.userDoc.orders = tmpListItems;
  }

}
