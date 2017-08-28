import { Action } from '@ngrx/store';
import * as firebase from 'firebase/app';

export const LOGIN = '[Auth] login';
export const UPDATE_AUTH = '[Auth] update';
export const LOGOUT = '[Auth] logout';

export class LoginAction implements Action {
  readonly type = LOGIN;
}

export class UpdateAuthAction implements Action {
  readonly type = UPDATE_AUTH;

  constructor(public payload: firebase.UserInfo) { }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export type Actions = LoginAction
  | UpdateAuthAction
  | LogoutAction;
