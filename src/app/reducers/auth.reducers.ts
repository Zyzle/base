import { createFeatureSelector } from '@ngrx/store';

import * as auth from '../actions/auth.actions';

export interface AuthState {
  pending: boolean;
  loggedIn: boolean;
  username: string;
  id: string;
  failedAttempt: boolean;
}

const initialState: AuthState = {
  pending: false,
  loggedIn: false,
  username: '',
  id: '',
  failedAttempt: false
};

export function authReducer(state: AuthState = initialState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export const getAuth = createFeatureSelector<AuthState>('auth');
