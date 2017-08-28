import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as firebase from 'firebase/app';

import * as auth from '../actions/auth.actions';

export interface AuthState {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  providerId: string;
  uid: string;
}

const initialState: AuthState = {
  displayName: '',
  email: '',
  phoneNumber: '',
  photoURL: '',
  providerId: '',
  uid: ''
};

export function authReducer(state: AuthState = initialState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.UPDATE_AUTH:
      return { ...action.payload };
    case auth.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export const getAuth = createFeatureSelector<AuthState>('auth');
export const getAuthenticated = createSelector(getAuth, (state: AuthState) => state.uid !== '');
