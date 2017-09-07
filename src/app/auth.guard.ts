import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { AppState } from './app.reducers';
import { LoginRedirect } from './actions/auth.actions';
import { getAuthenticated } from './reducers/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private store: Store<AppState>) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(getAuthenticated)
      .take(1)
      .map((authed) => {
        if (!authed) {
          // this.router.navigate(['/login']);
        }
        return authed;
      });
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select(getAuthenticated)
      .take(1)
      .map((authed) => {
        if (!authed) {
          this.store.dispatch(new LoginRedirect());
        }
        return authed;
      });
  }
}
