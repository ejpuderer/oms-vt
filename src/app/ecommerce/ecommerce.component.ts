import { ForSale } from './../models/forsale.model';
import { ShowListBase } from 'src/app/show-list-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent extends ShowListBase<ForSale> {
  toolbar = "*";

  getType() { return ForSale.prototype }

  onListUpdate() { }

  onModelUpdate(data: any) {
    return new ForSale(data);
  }

}
