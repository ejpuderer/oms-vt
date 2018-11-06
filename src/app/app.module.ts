import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from './material/material.module';
import { SupportModule } from './support/support.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { CareerOpportunitiesComponent } from './career-opportunities/career-opportunities.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MembersComponent } from './members/members.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    CareerOpportunitiesComponent,
    BlogComponent,
    HeaderComponent,
    AppsComponent,
    EcommerceComponent,
    MembersComponent,
    DropdownDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SupportModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
