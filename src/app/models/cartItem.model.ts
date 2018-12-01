import { ForSale } from "./forsale.model";
import { BaseModel } from "./base.model";

export class CartItem extends BaseModel {
    quantity: number;
    item: ForSale;
}