import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SupportComponent } from './support.component';
import { FaqComponent } from './faq/faq.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const supportRoutes: Routes = [
  {
    path: '',
    component: SupportComponent,
    children: [
      {
        path: 'faqs',
        component: FaqComponent
      },
      {
        path: 'tandc',
        component: TermsAndConditionsComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(supportRoutes)
  ],
  declarations: [
    SupportComponent,
    FaqComponent,
    TermsAndConditionsComponent,
    PrivacyComponent,
    ContactUsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class SupportModule { }
