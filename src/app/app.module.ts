import { DropdownDirective } from './dropdown.directive';
import { MaterialModule } from './material/material.module';
import { SupportModule } from './support/support.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BenefitsComponent } from './career-opportunities/benefits/benefits.component';
import { HistoryComponent } from './members/history/history.component';
import { WishListComponent } from './members/wish-list/wish-list.component';
import { AdminModule } from './admin/admin.module';

const config = {
  apiKey: "AIzaSyBBlh8c8NWNqBwyHfqa-tDLjQgeAAxREnI",
  projectId: 'oms-vt',
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
    DropdownDirective,
    FooterComponent,
    BenefitsComponent,
    HistoryComponent,
    WishListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SupportModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers),
    HttpClientModule
  ],
  providers: [CookieService, AppService, AuthService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
