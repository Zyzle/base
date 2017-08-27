import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { Store } from '@ngrx/store';

import { AppState } from './app.reducers';
import { environment } from '../environments/environment';

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

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  logout() { }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width:  number) {
    this.isSideBySide = width > this.sideBySideWidth;
  }
}
