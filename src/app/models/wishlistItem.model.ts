import { ForSale } from './forsale.model';
import { BaseModel } from './base.model';
export class WishlistItem extends BaseModel {

    dateAdded: Date;
    item: ForSale;
    
}