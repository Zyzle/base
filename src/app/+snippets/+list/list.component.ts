import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import {MdProgressCircle, MdSpinner} from '@angular2-material/progress-circle';
import { MdToolbar } from '@angular2-material/toolbar';

import { Snippet } from '../shared';

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
export class ListComponent implements OnInit {

  snippets: FirebaseListObservable<Snippet[]>;
  users: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.snippets = this.af.database.list('/snippets');
    this.users = this.af.database.list('/users');
  }

  getImage(s: Snippet) {
    return 'assets/' + s.languageAlias + '.svg';
  }

}
