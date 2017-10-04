import { Injectable } from '@angular/core';

import { Effect } from '@ngrx/effects';
import { DataSnapshot } from 'firebase/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

import * as SnippetsActions from './snippets.actions';
import { Snippet } from './snippets.models';

@Injectable()
export class SnippetsEffects {

  private _snippets: FirebaseListObservable<Snippet[]>;
  private _addedObservable: Subject<Snippet> = new Subject();
  private _changedObservable: Subject<Snippet> = new Subject();
  private _removedObservable: Subject<string> = new Subject();

  @Effect()
  addedEffect$ = this._addedObservable.map((snippet) => {
    return new SnippetsActions.SnippetAddAction(snippet);
  });

  @Effect()
  changedEffect$ = this._changedObservable.map((snippet) => {
    return new SnippetsActions.SnippetUpdateAction(snippet);
  });

  @Effect()
  removedEffect$ = this._removedObservable.map((key) => {
    return new SnippetsActions.SnippetRemoveAction(key);
  });

  constructor(private _db: AngularFireDatabase) {
    this._snippets = this._db.list('/snippets');

    this._snippets.$ref.ref.on('child_added', (x) => {
      this._addedObservable.next(this.mergeWithKey(x));
    });

    this._snippets.$ref.ref.on('child_changed', (x) => {
      this._changedObservable.next(this.mergeWithKey(x));
    });

    this._snippets.$ref.ref.on('child_removed', (x) => {
      this._removedObservable.next(x.key);
    });
  }

  private mergeWithKey(firebaseObject: DataSnapshot): Snippet {
    return { ...firebaseObject.val(), $key: firebaseObject.key };
  }
}
