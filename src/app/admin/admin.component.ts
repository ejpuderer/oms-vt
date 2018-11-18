import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { BtnAction } from '../models/BtnAction.enum';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  btnAction = BtnAction;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.indexChangeSubscription.subscribe(
      (chg) => this.expandedIndex[chg.cmpIndex] = chg.itemIndex
    )
  }
  
  btnClick(index: number, action: BtnAction) {
    this.adminService.actionChangeSubscription.next({cmpIndex: index, action: action});
  }

  expandedView: boolean[] = [false, false, false, false, false];
  expandedIndex: number[] = [-1, -1, -1, -1, -1];

  expandClick(index: number) {
    this.expandedView[index] = !this.expandedView[index];
  }
}
