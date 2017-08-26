import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

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

  constructor() {}

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  logout() { }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width:  number) {
    console.log('called resize', width);
    this.isSideBySide = width > this.sideBySideWidth;
  }
}
