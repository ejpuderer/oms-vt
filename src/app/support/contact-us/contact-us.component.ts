import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUs: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  company: FormControl;
  email: FormControl;
  comments: FormControl;

  constructor(private appService: AppService, private uiService: UIService) {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.company = new FormControl('', [Validators.required]);;
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.comments = new FormControl('', [Validators.required]);

    this.contactUs = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.company,
      email: this.email,
      comments: this.comments
    })
  }

  ngOnInit() {

  }

  clearForm() {
    Object.keys(this.contactUs.controls).forEach(control => {
      const ctrl = this.contactUs.controls[control]; 
      ctrl.reset();
      ctrl.setErrors(null);
    });
  }

  onSubmit() {
    this.appService.postHttp('https://qbheijzzl9.execute-api.us-east-1.amazonaws.com/live/contact-us'
      , this.contactUs.value).subscribe((res) => {
        this.uiService.showSnackbar(
          'Thank you for your feedback, someone will get back with you within 2 business days',
          null, 3000);
        this.clearForm();
      },
      (error) => {
        this.uiService.showSnackbar(error, null, 3000);
      });
  }

  schema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "url": "http://onlinematerialsourcing.com/support/contact-us/",
    "name": "Online Material Sourcing",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer service"
    }
  }
}
