import { WishlistItem } from './wishlistItem.model';
import { BaseModel } from './base.model';

export class Wishlist extends BaseModel {

    public collectionName(): string {
        return 'WishList';
    }

    wishListItems: WishlistItem[];

    toJSON() {
        let jsonStr = [];
        for (let item of this.wishListItems) {
            jsonStr.push({dateAdded: item.dateAdded, item: {...item.item}})
        }
        return jsonStr;
    }
}