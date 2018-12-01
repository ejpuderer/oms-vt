import { Wishlist } from './../models/wishlist.model';
import { Store } from '@ngrx/store';
import { AppService } from './../app.service';
import { Form } from './../models/form.model';
import { SubType } from './../models/subType.model';
import { ItemType } from './../models/type.model';
import { ForSale } from './../models/forsale.model';
import { ShowListBase } from 'src/app/show-list-base';
import { Component } from '@angular/core';
import * as fromRoot from '../app.reducer';
import { WishlistItem } from '../models/wishlistItem.model';
import { EcommerceService } from './ecommerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent extends ShowListBase<ForSale> {
  availableTypes: ItemType[];
  availableSubTypes: SubType[];
  availableForms: Form[];

  useableSubtypes: SubType[];

  selectedType: ItemType;
  selectedSubType: SubType;
  selectedForm: Form;

  filteredForSale: ForSale[];
  userId: String;
  userWishList: Wishlist;

  constructor(private store: Store<fromRoot.State>, appService: AppService, 
    private ecomService: EcommerceService, private router: Router) {
    super(appService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getAppService().getDocListFromDB<ItemType>(ItemType.prototype).subscribe(
      (doc) => this.availableTypes = this.getAppService().docChangeActionToList(doc)
    );

    this.getAppService().getDocListFromDB<SubType>(SubType.prototype).subscribe(
      (doc) => this.availableSubTypes = this.getAppService().docChangeActionToList(doc)
    );

    this.getAppService().getDocListFromDB<Form>(Form.prototype).subscribe(
      (doc) => this.availableForms = this.getAppService().docChangeActionToList(doc)
    );

    this.store.select(fromRoot.getIsAuth).subscribe(
      (isAuth) => {
        if (isAuth) {
          const uid = this.getAppService().getCookieService().get('uid');
          this.userId = uid;
          this.getAppService().getDocFromDB<Wishlist>(Wishlist.prototype, uid).subscribe(
            (doc) => this.userWishList = new Wishlist(doc)
          );
        } else {
          this.userId = null;
        }

      }
    );

  }

  getType() { return ForSale.prototype }

  onListUpdate() {
    this.filterForSale();
  }

  filterSubTypes() {
    this.useableSubtypes = this.availableSubTypes.filter((st) => st.typeName == this.selectedType.typeName);
  }

  filterForSale() {
    let filteredList: ForSale[] = this.availableDocs;
    if (this.selectedType) {
      filteredList = filteredList.filter((fs) => fs.type == this.selectedType.typeName);
    }

    if (this.selectedSubType) {
      filteredList = filteredList.filter((fs) => fs.subtype == this.selectedSubType.subTypeName);
    }

    if (this.selectedForm) {
      filteredList = filteredList.filter((fs) => fs.form == this.selectedForm.formName);
    }
    this.filteredForSale = filteredList;
  }

  clearFilters() {
    this.selectedType = null;
    this.selectedSubType = null;
    this.selectedForm = null;
  }

  onModelUpdate(data: any) {
    return new ForSale(data);
  }

  addToCart(item: ForSale, quantity: number) {
    this.ecomService.addCartItem(item, quantity);
  }

  addToWishlist(item: ForSale) {
    if (this.userWishList && this.userWishList.wishListItems) {
      if (this.userWishList.wishListItems.find((wli) => wli.item.name === item.name)) {
        this.ecomService.showMessage('That item is already in your wish list');
      } else {
        this.userWishList.wishListItems.push(new WishlistItem({ dateAdded: new Date(), item: item}));
        this.getAppService().updateDatabase(this.userId.toString(), this.userWishList, { wishListItems: this.userWishList.toJSON() }).then();
      }
    } else {
      this.userWishList = new Wishlist(null);
      this.userWishList.wishListItems = [];
      this.userWishList.wishListItems.push(new WishlistItem({ dateAdded: new Date(), item: item}));
      this.getAppService().updateDatabase(this.userId.toString(), this.userWishList, { wishListItems: this.userWishList.toJSON() }).then();
    }
  }

  isActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

}
