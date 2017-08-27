import { Action } from '@ngrx/store';

export interface SnippetsState {
  snippetsList: any[];
}

const initialState: SnippetsState = {
  snippetsList: []
};

export function snippetsReducer(state: SnippetsState = initialState, action: any): SnippetsState {
  switch (action.type) {
    default:
      return state;
  }
}
