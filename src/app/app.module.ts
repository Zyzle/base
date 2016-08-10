import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FIREBASE_PROVIDERS, AuthProviders, AuthMethods, defaultFirebase,
  firebaseAuthConfig } from 'angularfire2';

import { AppComponent } from './app.component';
import { APP_ROUTING_PROVIDERS, ROUTING } from './app.routing';

import { HomeComponent } from './+home';
import { LoginComponent } from './+login';
import { AdminComponent } from './+admin';
import { SnippetsComponent, ListComponent, AddComponent, DetailComponent,
  EditComponent } from './+snippets';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    SnippetsComponent,
    ListComponent,
    AddComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [
    APP_ROUTING_PROVIDERS,
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
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
