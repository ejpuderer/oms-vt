import { AppsComponent } from './apps/apps.component';
import { BlogComponent } from './blog/blog.component';
import { MembersComponent } from './members/members.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerOpportunitiesComponent } from './career-opportunities/career-opportunities.component';

const appRoutes: Routes = [
  {
    path: 'about-us',
    loadChildren: './about-us/about-us.module#AboutUsModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'support',
    loadChildren: './support/support.module#SupportModule'
  },
  { path: 'e-commerce', pathMatch: 'full', component: EcommerceComponent },
  { path: 'members', pathMatch: 'full', component: MembersComponent },
  { path: 'careers', pathMatch: 'full', component: CareerOpportunitiesComponent },
  { path: 'blog', pathMatch: 'full', component: BlogComponent },
  { path: 'apps', pathMatch: 'full', component: AppsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
