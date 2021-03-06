import { Component, OnInit } from '@angular/core';
import { Advisor } from 'src/app/models/advisor.model';
import { ShowListBase } from 'src/app/show-list-base';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent extends ShowListBase<Advisor> {
  
  getType() { return Advisor.prototype }

  onListUpdate() { }

  onModelUpdate(data: any) {
    return new Advisor(data);
  }

}