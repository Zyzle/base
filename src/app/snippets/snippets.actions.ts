import { Action } from '@ngrx/store';

import { Language } from './snippets.models';

export const LANGUAGE_ADD = '[Snippets] Add language';
export const LANGUAGE_UPDATE = '[Snippets] Update language';
export const LANGUAGE_REMOVE = '[Snippets] Remove language';

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

export type Actions = LanguageAddAction
  | LanguageRemoveAction
  | LanguageUpdateActon;
