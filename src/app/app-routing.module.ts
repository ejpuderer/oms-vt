import { AppsComponent } from './apps/apps.component';
import { BlogComponent } from './blog/blog.component';
import { MembersComponent } from './members/members.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerOpportunitiesComponent } from './career-opportunities/career-opportunities.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';

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
  { path: 'careers', pathMatch: 'full', component: CareerOpportunitiesComponent },
  { path: 'blog', pathMatch: 'full', component: BlogComponent },
  { path: 'apps', pathMatch: 'full', component: AppsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'members', pathMatch: 'full', component: MembersComponent, canLoad: [AuthGuard] },
  { path: 'admin', pathMatch: 'full', component: AdminComponent, canLoad: [AuthGuard] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {initialNavigation: false}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
