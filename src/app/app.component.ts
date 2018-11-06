import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';
import { filter } from 'rxjs//operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OMS';

  constructor(private router: Router, private appService: AppService) { 
    router.events
    .subscribe((val) => {
      if (val instanceof NavigationEnd) {
        appService.saveLastRoute(val);
      }
    });
  }

  ngOnInit() {
    const lastRoute = this.appService.getLastRoute();
    if (lastRoute) {
      this.router.navigateByUrl(lastRoute.url);
    } else {
      this.router.navigate(['/']);
    }
  }
}
