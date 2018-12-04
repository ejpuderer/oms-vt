import { BaseModel } from "./base.model";
import { CartItem } from "./cartItem.model";
import { Address } from "./address.model";

export class Order extends BaseModel {
    orderDate: Date;
    shipTo: Address;
    orderItems: CartItem[];
}