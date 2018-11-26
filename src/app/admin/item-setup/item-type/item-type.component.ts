import { Component } from '@angular/core';
import { ItemType } from 'src/app/models/type.model';
import { DBListBasecomponent } from '../../DBListBaseComponent';

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.css']
})
export class ItemTypeComponent extends DBListBasecomponent<ItemType> {

  getType() {
    return ItemType.prototype;
  }
  
  onModelUpdate(data: any) {
    return new ItemType(data);
  }

}