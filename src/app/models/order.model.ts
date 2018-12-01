import { BaseModel } from "./base.model";
import { CartItem } from "./cartItem.model";

export class Order extends BaseModel {
    orderDate: Date;
    orderItems: CartItem[];
}