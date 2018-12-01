import { Order } from "./order.model";
import { BaseDBModel } from "./baseDB.model";

export class OrderHistory extends BaseDBModel {

    public collectionName(): string {
        return 'OrderHistory';
    }

    orders: Order[];

    toJSON() {
        let jsonStr = [];
        let cartItems = [];
        for (let order of this.orders) {
            cartItems = [];
            for (let item of order.orderItems) {
                cartItems.push({quantity: item.quantity, item: {...item.item}})
            }
            console.log(cartItems);
            jsonStr.push({orderDate: order.orderDate, orderItems: cartItems })
        }
        return jsonStr;
    }
}