import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MD_CARD_DIRECTIVES
  ]
})
export class LoginComponent implements OnInit {

  private authData: FirebaseAuthState;

  constructor(private router: Router, private af: AngularFire) {
    this.af.auth.subscribe((ad: FirebaseAuthState) => {
      this.authData = ad;
      if (this.authData) {
        let user = this.af.database.object('/users/' + this.authData.uid);
        user.set({
          name: this.authData.auth['displayName'],
          email: this.authData.auth['email'],
          lastSeen: new Date().getTime()
        });
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {}

  doLogin() {
    this.af.auth.login();
  }
}
