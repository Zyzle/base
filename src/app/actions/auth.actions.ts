import { Action } from '@ngrx/store';

export const AUTHENTICATING = '[Auth] authenticating';
export const AUTHENTICATION_SUCCESS = '[Auth] authentication success';
export const AUTHENTICATION_FAILURE = '[Auth] authentication failure';
export const LOGOUT = '[Auth] logout';

export class AuthenticatingAction implements Action {
  readonly type = AUTHENTICATING;
}

export class AuthenticationSuccessAction implements Action {
  readonly type = AUTHENTICATION_SUCCESS;
}

export class AuthenticationFailureAction implements Action {
  readonly type = AUTHENTICATION_FAILURE;
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export type Actions = AuthenticatingAction
  | AuthenticationFailureAction
  | AuthenticationSuccessAction
  | LogoutAction;
