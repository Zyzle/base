import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {MdButton} from '@angular2-material/button/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import { MdIcon } from '@angular2-material/icon';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-language-admin',
  templateUrl: 'language-admin.component.html',
  styleUrls: ['language-admin.component.css'],
  directives: [
    MdButton,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar
  ]
})
export class LanguageAdminComponent implements OnInit {

  newLanguage: string;
  languages: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {}

  ngOnInit() {
    this.languages = this.af.database.list('/languages');
  }

  onSubmit() {
    this.languages.push(this.newLanguage);
    this.newLanguage = '';
  }

  remove(key: string) {
    this.languages.remove(key);
  }

}
