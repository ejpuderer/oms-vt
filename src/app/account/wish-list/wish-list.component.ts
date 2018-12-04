import { WishlistItem } from './../../models/wishlistItem.model';
import { Wishlist } from './../../models/wishlist.model';
import { Component } from '@angular/core';
import { AccountBase } from '../account-base';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent extends AccountBase<Wishlist> {

  getType() {
    return Wishlist.prototype;
  }

  populateList(doc: Wishlist) {
    this.userDoc = new Wishlist(null);
    const tmpListItems: WishlistItem[] = [];

    for (let item of doc.wishListItems) {
      let any = new Object(item);
      let inneritem = new WishlistItem({ dateAdded: new Date(any['dateAdded'].seconds * 1000), item: item.item });
      tmpListItems.push(inneritem)
    }
    this.userDoc.wishListItems = tmpListItems;
  }

  removeItem(index: number) {
    this.userDoc.wishListItems.splice(index, 1);
    this.getAppService().updateDatabase<Wishlist>(this.userId, this.userDoc, 
      { wishListItems: this.userDoc.toJSON() }).then();
  }

}
