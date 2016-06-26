import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {

  private authData: FirebaseAuthState;

  constructor(af: AngularFire, private router: Router) {
    af.auth.subscribe((ad: FirebaseAuthState) => {
      this.authData = ad;
    });
  }

  canActivate() {
    return this.authData !== null;
  }
}
