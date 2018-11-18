import { Component } from '@angular/core';
import { ForSale } from 'src/app/models/forsale.model';
import { DBListBasecomponent } from '../DBListBaseComponent';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent extends DBListBasecomponent<ForSale> {

  getType() {
    return ForSale.prototype;
  }

  onModelUpdate(data: any) {
    return new ForSale(data);
  }

}
