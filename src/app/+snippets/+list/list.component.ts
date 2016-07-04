import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdProgressCircle, MdSpinner } from '@angular2-material/progress-circle';
import { MdToolbar } from '@angular2-material/toolbar';

import { Observable } from 'rxjs/Observable';

import { Snippet } from '../shared';
import { CanComponentDeactivate } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdButton,
    MdIcon,
    MdProgressCircle,
    MdSpinner,
    MdToolbar
  ],
  providers: [
    MdIconRegistry
  ]
})
export class ListComponent implements OnInit, CanComponentDeactivate {

  snippets: FirebaseListObservable<Snippet[]>;
  snippetsBackup: FirebaseListObservable<Snippet[]>;
  auth: FirebaseAuthState;
  loaded: boolean = false;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.af.auth.subscribe((ad: FirebaseAuthState) => {
      this.auth = ad;
      this.snippetsBackup = this.af.database.list('/snippets_to_delete/' + this.auth.uid);
    });

    this.snippets = this.af.database.list('/snippets');

    this.snippets.map(() => {
      return true;
    })
    .subscribe((b: boolean) => {
      this.loaded = b;
    });
  }

  getImage(s: Snippet) {
    return 'assets/' + s.languageAlias + '.svg';
  }

  /**
   * Copy snippets to a tmp location under the deleting users name
   */
  delete(snippet: Snippet) {
    let snippetToDelete = Object.assign({}, snippet);
    this.snippets.remove(snippet.$key);
    delete snippetToDelete.$key;
    this.snippetsBackup.push(snippetToDelete);
  }

  restore(snippet: Snippet) {
    let snippetToRestore = Object.assign({}, snippet);
    this.snippetsBackup.remove(snippet.$key);
    delete snippetToRestore.$key;
    this.snippets.push(snippetToRestore);
  }

  /**
   * On navigate away we will clean up any tmp deleted snippets
   */
  canDeactivate(): boolean | Observable<boolean> {
    this.snippetsBackup.remove();
    return true;
  }

}
