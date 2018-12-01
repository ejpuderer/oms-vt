import { WishlistItem } from './wishlistItem.model';
import { BaseDBModel } from "./baseDB.model";

export class Wishlist extends BaseDBModel {

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