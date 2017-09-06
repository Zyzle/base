import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CoreModule } from './core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { appReducers } from './app.reducers';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    AppRoutingModule,
    CoreModule.forRoot({ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
