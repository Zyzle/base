import { Component, OnInit } from '@angular/core';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

import { FirebaseAuth } from 'angularfire2';

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
  ]
})
export class AuthComponent implements OnInit {

  public authData: Object;
  public authCardOpen: boolean;

  constructor(public auth: FirebaseAuth) {
    this.authCardOpen = false;

    auth.subscribe((ad: any) => {
      this.authData = ad;
    });
  }

  ngOnInit() {

  }

  toggleCardOpen() {
    if (this.authData){
      this.authCardOpen = !this.authCardOpen;
    }

  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
