import { Component, OnInit } from '@angular/core';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css'],
  directives: [
    MdButton,
    MD_CARD_DIRECTIVES,
    MdIcon
  ],
  providers: [
    MdIconRegistry
  ]/*,
  host: {
    '(body:click)': 'cardClose()'
  }*/
})
export class AuthComponent implements OnInit {

  public authData: Object;
  public authCardOpen: boolean;

  constructor(public af: AngularFire) {
    this.authCardOpen = false;
    this.af.auth.subscribe((ad: any) => {
      this.authData = ad;
    });

  }

  ngOnInit() {

  }

  toggleCardOpen() {
    if (this.authData) {
      this.authCardOpen = !this.authCardOpen;
    }
  }

  cardClose() {
    if (this.authCardOpen) {
      this.authCardOpen = false;
    }
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

}
