import { Component } from '@angular/core';
import { FAQ } from 'src/app/models/faq.model';
import { DBListBasecomponent } from '../DBListBaseComponent';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent extends DBListBasecomponent<FAQ> {

  getType() {
    return FAQ.prototype;
  }

  onModelUpdate(data: any) {
    return new FAQ(data);
  }

}
