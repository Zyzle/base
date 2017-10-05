import { Injectable } from '@angular/core';

import { Effect } from '@ngrx/effects';
import { DataSnapshot } from 'firebase/database';
import { AngularFireAction, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

import * as SnippetsActions from './snippets.actions';
import { Language } from './snippets.models';

@Injectable()
export class LanguagesEffects {

  private _languages: AngularFireList<Language>;
  private _stateChange: Subject<AngularFireAction<DataSnapshot>> = new Subject();
  private _listSubscription: Subscription;

  @Effect()
  languageEffect$ = this._stateChange
    .map((action) => {
      switch (action.type) {
        case 'child_added':
          return new SnippetsActions.LanguageAddAction(this.mergeWithKey(action.payload));
        case 'child_removed':
          return new SnippetsActions.LanguageRemoveAction(action.payload.key);
        case 'child_changed':
          return new SnippetsActions.LanguageUpdateActon(this.mergeWithKey(action.payload));
      }
    });

  constructor(private _db: AngularFireDatabase) {
    this._languages = this._db.list<Language>('/languages');

    this._listSubscription = this._languages.stateChanges().do((action) => {
      this._stateChange.next(action);
    }).subscribe();
  }

  destroy() {
    this._listSubscription.unsubscribe();
  }

  private mergeWithKey(firebaseObject: DataSnapshot): Language {
    return { ...firebaseObject.val(), $key: firebaseObject.key };
  }

}
