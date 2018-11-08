import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

    constructor(private cookieService: CookieService) { }

    public getLastRoute(): NavigationEnd {
        const val = <NavigationEnd> JSON.parse(this.cookieService.get('lastRoute'));
        if (val) {
            return val;
        }
        return null;
    }

    public saveLastRoute(val: NavigationEnd) {
        console.log('Last Route: ' + val.url);
        this.cookieService.set( 'lastRoute', JSON.stringify(val) );
    }
}