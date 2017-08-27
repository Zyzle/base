import { Action, ActionReducerMap } from '@ngrx/store';

import { AuthState, authReducer } from './reducers/auth.reducers';

export interface AppState {
  auth: AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer
};
