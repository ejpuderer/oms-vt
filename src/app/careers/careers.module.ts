import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CareersComponent } from "./careers.component";
import { BenefitsComponent } from "./benefits/benefits.component";
import { JobPostingsComponent } from './job-postings/job-postings.component';
import { SharedModule } from "../shared/shared.module";

const careerRoutes: Routes = [
    {
      path: '',
      component: CareersComponent,
      children: [
        {
          path: 'benefits',
          component: BenefitsComponent
        },
        {
          path: 'job-postings',
          component: JobPostingsComponent
        }
      ]
    }];

@NgModule({
    imports: [
    SharedModule,
    RouterModule.forChild(careerRoutes)
  ],
  declarations: [
    CareersComponent,
    JobPostingsComponent,
    BenefitsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class CareersModule { }