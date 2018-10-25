import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportComponent } from './support.component';
import { FaqComponent } from './faq/faq.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';

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
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(supportRoutes)
  ],
  declarations: [
    SupportComponent,
    FaqComponent,
    TermsAndConditionsComponent,
    PrivacyComponent
  ],
  exports: [
    RouterModule
  ]
})
export class SupportModule { }
