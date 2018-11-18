import { Component } from '@angular/core';
import { Advisor } from 'src/app/models/advisor.model';
import { DBListBasecomponent } from '../DBListBaseComponent';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent extends DBListBasecomponent<Advisor> {

  getType() {
    return Advisor.prototype;
  }

  onModelUpdate(data: any) {
    return new Advisor(data);
  }

}
