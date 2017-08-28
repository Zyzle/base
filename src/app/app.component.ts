import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { Store } from '@ngrx/store';

import { AppState } from './app.reducers';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  private sideBySideWidth = 960;

  isSideBySide = true;
  isNavDock = true;

  get version() { return environment.version; }
  get isOpened() { return this.isSideBySide && this.isNavDock; }
  get mode() { return this.isSideBySide ? 'side' : 'over'; }

  constructor(private _store: Store<AppState>, private _auth: AuthService) {}

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  logout() {
    this._auth.logout();
  }

  login() {
    this._auth.login();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width:  number) {
    this.isSideBySide = width > this.sideBySideWidth;
  }
}
