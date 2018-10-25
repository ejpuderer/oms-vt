import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { GrowthComponent } from './growth/growth.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { OverviewComponent } from './overview/overview.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'roadmap',
        component: RoadmapComponent,
      },
      {
        path: 'growth',
        component: GrowthComponent,
      },
      {
        path: 'how-it-works',
        component: HowitworksComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent,
    RoadmapComponent,
    GrowthComponent,
    HowitworksComponent,
    OverviewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
