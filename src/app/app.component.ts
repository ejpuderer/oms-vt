import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { filter } from 'rxjs//operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OMS';

  constructor(private router: Router, private appService: AppService, private authService: AuthService) { 
    this.router.events
    .subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.appService.saveLastRoute(val);
      }
    });
  }

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
