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
      (doc) => {
        this.availableTypes = [];
        doc.forEach(
          (model) => this.availableTypes.push(new ItemType(model.payload.doc.data()))          
        );
      }
    );
    this.getAppservice().getDocListFromDB<SubType>(SubType.prototype).subscribe(
      (doc) => {
        this.availableSubTypes = [];
        doc.forEach(
          (model) => this.availableSubTypes.push(new SubType(model.payload.doc.data()))          
        );
      }
    );
    this.getAppservice().getDocListFromDB<Form>(Form.prototype).subscribe(
      (doc) => {
        this.availableForms = [];
        doc.forEach(
          (model) => this.availableForms.push(new Form(model.payload.doc.data()))          
        );
      }
    );
    this.useableSubtypes = [];
  }

  filterSubTypes(type: ItemType) {
    this.useableSubtypes = this.availableSubTypes.filter((subType) => subType.typeName == type.typeName)
  }

  getType() {
    return ForSale.prototype;
  }

  onModelUpdate(data: any) {
    return new ForSale(data);
  }

}
