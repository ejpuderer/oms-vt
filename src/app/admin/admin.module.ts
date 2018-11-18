import { NgModule } from "@angular/core";
import { JobsComponent } from './jobs/jobs.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { AdminService } from "./admin.service";
import { ForSaleComponent } from './for-sale/for-sale.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { BlogComponent } from './blog/blog.component';

const adminRoute: Routes = [
  {
    path: '',
    component: AdminComponent
  }];

@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(adminRoute)
    ],
    declarations: [
      AdminComponent,
      JobsComponent,
      FaqsComponent,
      ForSaleComponent,
      AdvisorsComponent,
      BlogComponent
    ],
    exports: [
      AdminComponent,
      JobsComponent,
      FaqsComponent,
      RouterModule
    ],
    providers: [
      AdminService
    ]
  })
  export class AdminModule { }