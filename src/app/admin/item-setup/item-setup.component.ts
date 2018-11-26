import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-setup',
  templateUrl: './item-setup.component.html',
  styleUrls: ['./item-setup.component.css']
})
export class ItemSetupComponent implements OnInit {

  @Input('cmpIndex') cmpIndex:number;

  constructor() { }

  ngOnInit() {
  }

}
