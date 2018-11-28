import { Store } from '@ngrx/store';
import { AppService } from './../app.service';
import { Form } from './../models/form.model';
import { SubType } from './../models/subType.model';
import { ItemType } from './../models/type.model';
import { ForSale } from './../models/forsale.model';
import { ShowListBase } from 'src/app/show-list-base';
import { Component } from '@angular/core';
import * as fromRoot from '../app.reducer';

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

  constructor(private store: Store<fromRoot.State>, appService: AppService) {
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
          this.userId = this.getAppService().getCookieService().get('uid');
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

}
