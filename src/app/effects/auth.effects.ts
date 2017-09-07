import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/do';

import * as authActions from '../actions/auth.actions';
import { AuthService } from '../core/auth.service';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$.ofType(authActions.LOGIN)
    .do(() => {
      this.auth.login();
    });

  @Effect({ dispatch: false })
  logout$ = this.actions$.ofType(authActions.LOGOUT)
    .do(() => {
      this.auth.logout();
    });

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.ofType(authActions.LOGOUT, authActions.LOGIN_REDIRECT)
    .do(() => {
      this.router.navigate(['/']);
    });

  constructor(private actions$: Actions, private router: Router, private auth: AuthService) { }

}
