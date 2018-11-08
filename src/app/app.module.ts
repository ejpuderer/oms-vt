import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from './material/material.module';
import { SupportModule } from './support/support.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { CareerOpportunitiesComponent } from './career-opportunities/career-opportunities.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MembersComponent } from './members/members.component';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UIService } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { reducers } from './app.reducer';
import { StoreModule } from '@ngrx/store';

const config = {
  apiKey: "AIzaSyBBlh8c8NWNqBwyHfqa-tDLjQgeAAxREnI",
  authDomain: "oms-vt.firebaseapp.com",
  databaseURL: "https://oms-vt.firebaseio.com",
  storageBucket: "oms-vt.appspot.com",
  messagingSenderId: "929849267472"
};

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
    BrowserAnimationsModule,
    SupportModule,
    MaterialModule,
    AuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [CookieService, AppService, AuthService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
