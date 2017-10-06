import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './app.reducers';
import { AuthState, getAuth } from './reducers/auth.reducers';
import * as auth from './actions/auth.actions';
import { environment } from '../environments/environment';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  private sideBySideWidth = 960;

  authState$: Observable<AuthState>;
  isSideBySide = true;
  isNavDock = true;

  get version() { return environment.version; }
  get isOpened() { return this.isSideBySide && this.isNavDock; }
  get mode() { return this.isSideBySide ? 'side' : 'over'; }

  constructor(private _store: Store<AppState>) {
    this.authState$ = this._store.select(getAuth);
  }

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  logout() {
    this._store.dispatch(new auth.LogoutAction());
  }

  login() {
    this._store.dispatch(new auth.LoginAction());
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width:  number) {
    this.isSideBySide = width > this.sideBySideWidth;
  }
}
