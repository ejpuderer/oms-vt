import { Component } from '@angular/core';
import { Partner } from 'src/app/models/partner.model';
import { DBListBasecomponent } from '../DBListBaseComponent';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent extends DBListBasecomponent<Partner> {

  getType() {
    return Partner.prototype;
  }

  onModelUpdate(data: any) {
    return new Partner(data);
  }

}
