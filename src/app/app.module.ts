import { DropdownDirective } from './dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { CookieService } from 'ngx-cookie-service';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UIService } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { reducers } from './app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { SupportModule } from './support/support.module';
import { AdminModule } from './admin/admin.module';
import { CareersModule } from './careers/careers.module';
import { AccountModule } from './account/account.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { FooterComponent } from './footer/footer.component';


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
    BlogComponent,
    HeaderComponent,
    AppsComponent,
    DropdownDirective,
    FooterComponent
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
    CareersModule,
    AccountModule,
    EcommerceModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    NgxJsonLdModule
  ],
  providers: [CookieService, AppService, AuthService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
