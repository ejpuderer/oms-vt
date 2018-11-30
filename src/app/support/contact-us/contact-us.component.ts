import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

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

  constructor(private appService: AppService) { 
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

  onSubmit() {
    this.appService.postHttp('https://qbheijzzl9.execute-api.us-east-1.amazonaws.com/live/contact-us'
    , this.contactUs.value).subscribe((res) => console.log(res));
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
