import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import * as SnippetsModels from './snippets.models';
import * as SnippetsActions from './snippets.actions';

export interface SnippetsState {
  snippetsList: any[];
  languageList: SnippetsModels.Language[];
}

const initialState: SnippetsState = {
  snippetsList: [],
  languageList: []
};

export function snippetsReducer(state: SnippetsState = initialState, action: SnippetsActions.Actions): SnippetsState {
  switch (action.type) {
    case SnippetsActions.LANGUAGE_ADD:
      return { ...state, languageList: [...state.languageList, action.payload] };
    case SnippetsActions.LANGUAGE_REMOVE:
      const filteredLangs = state.languageList.filter((language) => {
        return action.payload !== language.$key;
      });
      return { ...state, languageList: filteredLangs };
    case SnippetsActions.LANGUAGE_UPDATE:
      const updatedLangs = state.languageList.map((language) => {
        return language.$key === action.payload.$key ? action.payload : language;
      });
      return { ...state, languageList: updatedLangs };
    case SnippetsActions.SNIPPET_ADD:
      return { ...state, snippetsList: [...state.snippetsList, action.payload] };
    case SnippetsActions.SNIPPET_REMOVE:
      const filteredSnippets = state.snippetsList.filter((snippet) => {
        return action.payload != snippet.$key;
      });
      return { ...state, snippetsList: filteredSnippets };
    case SnippetsActions.SNIPPET_UPDATE:
      const updatedSnippets = state.snippetsList.map((snippet) => {
        return snippet.$key === action.payload.$key ? action.payload : snippet;
      });
      return { ...state, snippetsList: updatedSnippets };
    default:
      return state;
  }
}

export const getSnippetsState = createFeatureSelector<SnippetsState>('snippets');
export const getLanguagesList = createSelector(getSnippetsState, (state) => state.languageList);
export const getSnippetsList = createSelector(getSnippetsState, (state) => state.snippetsList);
