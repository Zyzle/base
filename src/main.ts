import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { FIREBASE_PROVIDERS, AuthProviders, AuthMethods, defaultFirebase, firebaseAuthConfig } from 'angularfire2';

import { BaseAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(BaseAppComponent, [
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('https://baseplayground.firebaseio.com/'),
  //defaultFirebase('https://base-c3306.firebaseio.com/'),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
  })
]);
