import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { AuthService } from '../auth/auth.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  cartItemCount = 0;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService, private appService: AppService) { }
  
  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
    this.isAdmin$ = this.store.select(fromRoot.getIsAdmin);
    this.appService.cartItemCount.subscribe(
      (count) => {
        this.cartItemCount = count
        console.log('Header count is: ' + count);
      }
    )
  }

  onLogout() {
    this.authService.logout();
  }

}
