import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-language-admin',
  templateUrl: 'language-admin.component.html',
  styleUrls: ['language-admin.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ]
})
export class LanguageAdminComponent implements OnInit {

  myForm: FormGroup = this.makeForm();
  resetting: boolean = false;

  languages: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {}

  ngOnInit() {
    this.languages = this.af.database.list('/languages');
  }

  onSubmit() {
    this.languages.push(this.myForm.value);
    this.myForm = this.makeForm();
    // as work-arounds go, this is super shonky
    this.resetting = true;
    setTimeout(() => this.resetting = false, 0);
  }

  remove(key: string) {
    this.languages.remove(key);
  }

  private makeForm() {
    return new FormGroup({
      displayName: new FormControl('', Validators.required),
      alias: new FormControl('', Validators.required)
    });
  }

}
