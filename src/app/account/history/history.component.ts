import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { OrderHistory } from 'src/app/models/orderHistory.model';
import { Order } from 'src/app/models/order.model';
import { CartItem } from 'src/app/models/cartItem.model';
import { ForSale } from 'src/app/models/forsale.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orderHistory: OrderHistory = new OrderHistory(null);
  userId: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.userId = this.appService.getCookieService().get('uid');
    this.appService.getDocFromDB<OrderHistory>(OrderHistory.prototype, this.userId).subscribe(
      (doc: OrderHistory) => {
        if (doc) {
          const tmpListItems: Order[] = [];

          for (let order of doc.orders) {
            let any = new Object(order);
            const items: CartItem[] = [];
            console.log(any)
            console.log(any['orderItems'])
            console.log(order.orderItems)
            for (let item of order.orderItems) {
              console.log(item)
              items.push(new CartItem({ quantity: item.quantity, item: new ForSale({...item.item}) }))
            }
            console.log(items)
            let inneritem = new Order({ orderDate: new Date(any['orderDate'].seconds * 1000), orderItems: items });
            tmpListItems.push(inneritem)
          }
          this.orderHistory.orders = tmpListItems;
        }
      }
    );

  }

}
