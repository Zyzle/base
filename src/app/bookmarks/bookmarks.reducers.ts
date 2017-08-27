import { Action } from '@ngrx/store';

export interface BookmarksState {
  bookmarksList: any[];
}

const initialState: BookmarksState = {
  bookmarksList: []
};

export function bookmarksReducer(state: BookmarksState = initialState, action: any): BookmarksState {
  switch (action.type) {
    default:
      return state;
  }
}
