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
  totalCompanents = 8;

  expandedView: boolean[];
  expandedIndex: number[];

  constructor(private adminService: AdminService) { 
    this.expandedView = [];
    this.expandedIndex = [];
    this.expandedView.fill(false, 0, this.totalCompanents);
    this.expandedIndex.fill(-1, 0, this.totalCompanents);
  }

  ngOnInit() {
    this.adminService.indexChangeSubscription.subscribe(
      (chg) => this.expandedIndex[chg.cmpIndex] = chg.itemIndex
    )
  }
  
  btnClick(index: number, action: BtnAction) {
    this.adminService.actionChangeSubscription.next({cmpIndex: index, action: action});
  }

  expandClick(index: number) {
    this.expandedView[index] = !this.expandedView[index];
  }
}
