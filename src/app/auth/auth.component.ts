import { Component, OnInit } from '@angular/core';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
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

  public authData: FirebaseAuthState;
  public authCardOpen: boolean = false;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe((ad: FirebaseAuthState) => {
      this.authData = ad;
      if (this.authData) {
        let user = this.af.database.object('/users/' + this.authData.uid);
        user.set({
          name: this.authData.auth['displayName'],
          email: this.authData.auth['email'],
          lastSeen: new Date().getTime()
        });
      }
    });
  }

  ngOnInit() {}

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
