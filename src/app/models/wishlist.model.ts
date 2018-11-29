import { WishlistItem } from './wishlistItem.model';
import { BaseModel } from './base.model';

export class Wishlist extends BaseModel {

    public collectionName(): string {
        return 'WishList';
    }

    wishListItems: WishlistItem[];
}