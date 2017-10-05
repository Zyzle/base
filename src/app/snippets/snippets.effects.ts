import { Injectable } from '@angular/core';

import { Effect } from '@ngrx/effects';
import { DataSnapshot } from 'firebase/database';
import { AngularFireAction, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

import * as SnippetsActions from './snippets.actions';
import { Snippet } from './snippets.models';

@Injectable()
export class SnippetsEffects {

  private _snippets: AngularFireList<Snippet>;
  private _stateChange: Subject<AngularFireAction<DataSnapshot>> = new Subject();
  private _listSubscription: Subscription;

  @Effect()
  snippetEffect$ = this._stateChange
    .map((action) => {
      switch (action.type) {
        case 'child_added':
          return new SnippetsActions.SnippetAddAction(this.mergeWithKey(action.payload));
        case 'child_removed':
          return new SnippetsActions.SnippetRemoveAction(action.payload.key);
        case 'child_changed':
          return new SnippetsActions.SnippetUpdateAction(this.mergeWithKey(action.payload));
      }
    });

  constructor(private _db: AngularFireDatabase) {
    this._snippets = this._db.list<Snippet>('/snippets');

    this._listSubscription = this._snippets.stateChanges().do((action) => {
      this._stateChange.next(action);
    }).subscribe();
  }

  destroy() {
    this._listSubscription.unsubscribe();
  }

  private mergeWithKey(firebaseObject: DataSnapshot): Snippet {
    return { ...firebaseObject.val(), $key: firebaseObject.key };
  }
}
