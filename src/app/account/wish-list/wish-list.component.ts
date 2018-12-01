import { WishlistItem } from './../../models/wishlistItem.model';
import { Wishlist } from './../../models/wishlist.model';
import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  userWishList: Wishlist;
  userId: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.userWishList = new Wishlist(null);
    this.userId = this.appService.getCookieService().get('uid');
    this.appService.getDocFromDB<Wishlist>(Wishlist.prototype, this.userId).subscribe(
      (doc: Wishlist) => {     
        const tmpListItems: WishlistItem[] = [];
        
        for (let item of doc.wishListItems) {
          let any = new Object(item);
          let inneritem = new WishlistItem({dateAdded: new Date(any['dateAdded'].seconds * 1000), item: item.item});
          tmpListItems.push(inneritem)
        }
        this.userWishList.wishListItems = tmpListItems;
      }
    );
  }

  removeItem(index: number) {
    this.userWishList.wishListItems.splice(index, 1);
    this.appService.updateDatabase<Wishlist>(this.userId, this.userWishList, 
      { wishListItems: this.userWishList.toJSON() }).then();
  }

}
