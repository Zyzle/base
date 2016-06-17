import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { FIREBASE_PROVIDERS, AuthProviders, AuthMethods, defaultFirebase,
  firebaseAuthConfig } from 'angularfire2';

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './app/environment';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyBzuu_QgpS2_MGNINWiKGoflF_gqPOHZ3c',
    authDomain: 'base-c3306.firebaseapp.com',
    databaseURL: 'https://base-c3306.firebaseio.com',
    storageBucket: 'base-c3306.appspot.com',
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
  }),
  APP_ROUTER_PROVIDERS
]);
