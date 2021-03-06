import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { AppsComponent } from './apps/apps.component';
import { BlogComponent } from './blog/blog.component';
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
  { 
    path: 'account', canLoad: [AuthGuard],
    loadChildren: './account/account.module#AccountModule' 
  },
  { 
    path: 'admin', pathMatch: 'full', canLoad: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule' 
  },
  { 
    path: 'e-commerce',
    loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
  },
  { path: 'blog', pathMatch: 'full', component: BlogComponent },
  { path: 'apps', pathMatch: 'full', component: AppsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/home/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/overview'}
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
