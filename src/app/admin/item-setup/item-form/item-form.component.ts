import { Form } from './../../../models/form.model';
import { Component } from '@angular/core';
import { DBListBasecomponent } from '../../DBListBaseComponent';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent extends DBListBasecomponent<Form> {

  getType() {
    return Form.prototype;
  }
  
  onModelUpdate(data: any) {
    return new Form(data);
  }

}