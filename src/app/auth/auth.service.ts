import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';

import { AuthData } from './auth-data.model';
import { UIService } from '../shared/ui.service';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from './auth.actions';
import * as Role from './role.actions';
import { AppService } from '../app.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private uiService: UIService,
    private store: Store<fromRoot.State>,
    private appService: AppService
  ) {}

  initAuthListener() {
    const lastRoute = this.appService.getLastRoute();
    if (lastRoute) {
      console.log(lastRoute.url);
      this.router.navigateByUrl(lastRoute.url);
    } else {
      this.router.navigate(['/']);
    }

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        this.appService.getDocFromDB(UserModel.prototype, user.uid).subscribe(
          (doc: UserModel) => {
            console.log(doc);
            if (doc && doc.role == 'admin') {
              this.store.dispatch(new Role.SetAdmin());
              this.router.navigate(['/admin']);
            } else {
              this.store.dispatch(new Role.SetMember());
              this.router.navigate(['/members']);  
            }
          }
        );
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
        this.router.navigate(['/home']);
      }
    });
  }

  registerUser(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.store.dispatch(new UI.StopLoading());
        const omsUser = new UserModel(null);
        omsUser.email = authData.email;
        omsUser.role = 'member';
        this.appService.updateDatabase(result.user.uid, omsUser).then();
      })
      .catch(error => {
        // this.uiService.loadingStateChanged.next(false);
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
