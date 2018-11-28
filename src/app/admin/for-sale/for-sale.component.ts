import { Form } from './../../models/form.model';
import { SubType } from './../../models/subType.model';
import { ItemType } from './../../models/type.model';
import { Component } from '@angular/core';
import { ForSale } from 'src/app/models/forsale.model';
import { DBListBasecomponent } from '../DBListBaseComponent';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent extends DBListBasecomponent<ForSale> {

  availableTypes: ItemType[];
  availableSubTypes: SubType[];
  availableForms: Form[];
  useableSubtypes: SubType[];

  ngOnInit() {
    super.ngOnInit();
    this.getAppservice().getDocListFromDB<ItemType>(ItemType.prototype).subscribe(
      (doc) => this.availableTypes = this.getAppservice().docChangeActionToList(doc)
    );

    this.getAppservice().getDocListFromDB<SubType>(SubType.prototype).subscribe(
      (doc) => this.availableSubTypes = this.getAppservice().docChangeActionToList(doc)
    );

    this.getAppservice().getDocListFromDB<Form>(Form.prototype).subscribe(
      (doc) => this.availableForms = this.getAppservice().docChangeActionToList(doc)
    );
    this.useableSubtypes = [];
  }

  listChange(listIndex: number) {
    super.listChange(listIndex);
    this.filterSubTypes(this.selectedItem.data.type);
  }

  filterSubTypes(typeName: string) {
    this.useableSubtypes = this.availableSubTypes.filter((subType) => subType.typeName == typeName);
  }

  getType() {
    return ForSale.prototype;
  }

  onModelUpdate(data: any) {
    return new ForSale(data);
  }

}
