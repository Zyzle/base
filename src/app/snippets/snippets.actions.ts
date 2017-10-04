import { Action } from '@ngrx/store';

import { Language, Snippet } from './snippets.models';

export const LANGUAGE_ADD = '[Snippets] Add language';
export const LANGUAGE_UPDATE = '[Snippets] Update language';
export const LANGUAGE_REMOVE = '[Snippets] Remove language';
export const SNIPPET_ADD = '[Snippets] Add snippet';
export const SNIPPET_UPDATE = '[Snippets] Update snippet';
export const SNIPPET_REMOVE = '[Snippets] Remove snippet';

export class LanguageAddAction implements Action {
  readonly type = LANGUAGE_ADD;

  constructor(public payload: Language) { }
}

export class LanguageUpdateActon implements Action {
  readonly type = LANGUAGE_UPDATE;

  constructor(public payload: Language) { }
}

export class LanguageRemoveAction implements Action {
  readonly type = LANGUAGE_REMOVE;

  constructor(public payload: string) { }
}

export class SnippetAddAction implements Action {
  readonly type = SNIPPET_ADD;

  constructor(public payload: Snippet) { }
}

export class SnippetUpdateAction implements Action {
  readonly type = SNIPPET_UPDATE;

  constructor(public payload: Snippet) { }
}

export class SnippetRemoveAction implements Action {
  readonly type = SNIPPET_REMOVE;

  constructor(public payload: string) { }
}

export type Actions = LanguageAddAction
  | LanguageRemoveAction
  | LanguageUpdateActon
  | SnippetAddAction
  | SnippetRemoveAction
  | SnippetUpdateAction;
