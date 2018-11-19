import { AppsComponent } from './apps/apps.component';
import { BlogComponent } from './blog/blog.component';
import { MembersComponent } from './members/members.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

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
  { 
    path: 'careers', 
    loadChildren: './careers/careers.module#CareersModule'
  },
  { path: 'e-commerce', pathMatch: 'full', component: EcommerceComponent },
  { path: 'blog', pathMatch: 'full', component: BlogComponent },
  { path: 'apps', pathMatch: 'full', component: AppsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'members', pathMatch: 'full', component: MembersComponent, canLoad: [AuthGuard] },
  { path: 'admin', pathMatch: 'full', canLoad: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule' },
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
