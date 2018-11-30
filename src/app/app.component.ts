import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OMS';

  constructor(private router: Router, private appService: AppService, private authService: AuthService) { 
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.appService.saveLastRoute(event);
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.authService.initAuthListener();
  }

  schema = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    'name': 'Online Material Sourcing',
    'url': 'https://onlinematerialsourcing.com',
    'logo': 'http://onlinematerialsourcing.com/assets/logo_large.png'
  };
}
