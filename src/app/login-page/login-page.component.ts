import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../app.reducers';
import * as auth from '../actions/auth.actions';

@Component({
  selector: 'base-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
  }

  login() {
    this._store.dispatch(new auth.LoginAction());
  }

}
