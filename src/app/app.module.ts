import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from './material/material.module';
import { SupportModule } from './support/support.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CareerOpportunitiesComponent } from './career-opportunities/career-opportunities.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MembersComponent } from './members/members.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
