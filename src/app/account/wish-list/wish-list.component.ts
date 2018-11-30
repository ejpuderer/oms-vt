import { WishlistItem } from './../../models/wishlistItem.model';
import { Wishlist } from './../../models/wishlist.model';
import { AppService } from 'src/app/app.service';
import { Component, OnInit } from '@angular/core';
import { ForSale } from 'src/app/models/forsale.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  userWishList: Wishlist;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.userWishList = new Wishlist(null);
    const uid = this.appService.getCookieService().get('uid');
    this.appService.getDocFromDB<Wishlist>(Wishlist.prototype, uid).subscribe(
      (doc: Wishlist) => {
        console.log(doc);
        
        const tmpListItems: WishlistItem[] = [];
        
        for (let item of doc.wishListItems) {
          console.log(item);
          let any = new Object(item);
          let inneritem = new WishlistItem();
          inneritem.dateAdded = new Date(any['dateAdded'].seconds * 1000);
          inneritem.item = new ForSale(item.item);
          tmpListItems.push(inneritem)
        }
        this.userWishList.wishListItems = tmpListItems;
      }
    );
  }

}
