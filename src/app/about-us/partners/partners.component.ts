import { Component, OnInit } from '@angular/core';
import { ShowListBase } from 'src/app/show-list-base';
import { Partner } from 'src/app/models/partner.model';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent extends ShowListBase<Partner> {
  
  getType(): Partner {
    return Partner.prototype;
  }  
  
  onListUpdate() { }

  onModelUpdate(data: any): Partner { 
    return new Partner(data);
  }

}
