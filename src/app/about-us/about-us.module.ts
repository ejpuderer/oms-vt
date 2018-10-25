import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { PartnersComponent } from './partners/partners.component';
import { TeamComponent } from './team/team.component';
import { CompanyComponent } from './company/company.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { LightPaperComponent } from './light-paper/light-paper.component';

const aboutUsRoutes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: 'partners',
        component: PartnersComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'advisors',
        component: AdvisorsComponent
      },
      {
        path: 'light-paper',
        component: LightPaperComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutUsRoutes)
  ],
  declarations: [
    AboutUsComponent,
    PartnersComponent,
    TeamComponent,
    CompanyComponent,
    AdvisorsComponent,
    LightPaperComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AboutUsModule { }
