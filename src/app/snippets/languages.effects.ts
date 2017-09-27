import { Injectable } from '@angular/core';

import { Effect } from '@ngrx/effects';
import { DataSnapshot } from 'firebase/database';
import { AngularFireDatabase,  FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

import * as SnippetsActions from './snippets.actions';
import { Language } from './snippets.models';

@Injectable()
export class LanguagesEffects {

  private _languages: FirebaseListObservable<Language[]>;
  private _addedObservable: Subject<Language> = new Subject();
  private _changedObservable: Subject<Language> = new Subject();
  private _removedObservable: Subject<string> = new Subject();

  @Effect()
  addedEffect$ = this._addedObservable.map((lang) => {
    return new SnippetsActions.LanguageAddAction(lang);
  });

  @Effect()
  changedEffect$ = this._changedObservable.map((lang) => {
    return new SnippetsActions.LanguageUpdateActon(lang);
  });

  @Effect()
  removedEffect$ = this._removedObservable.map((key) => {
    return new SnippetsActions.LanguageRemoveAction(key);
  });


  constructor(private _db: AngularFireDatabase) {
    this._languages = this._db.list('/languages');

    this._languages.$ref.ref.on('child_added', (x) => {
      this._addedObservable.next(this.mergeWithKey(x));
    });
    this._languages.$ref.ref.on('child_changed', (x) => {
      this._changedObservable.next(this.mergeWithKey(x));
    });
    this._languages.$ref.ref.on('child_removed', (x) => {
      this._removedObservable.next(x.key);
    });

  }

  private mergeWithKey(firebaseObject: DataSnapshot): Language {
    return { ...firebaseObject.val(), $key: firebaseObject.key };
  }

}
