import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LogoutAction, UpdateAuthAction } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducers';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private store: Store<AuthState>) {
    this.afAuth.authState.subscribe((item: firebase.User) => {
      if (item) {
        const auth = {
          displayName: item.displayName,
          email: item.email,
          phoneNumber: item.phoneNumber,
          photoURL: item.photoURL,
          providerId: item.providerId,
          uid: item.uid
        };

        this.store.dispatch(new UpdateAuthAction(auth));
      }
      else {
        this.store.dispatch(new LogoutAction());
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
