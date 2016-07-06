import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';

import { Language, Snippet } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MdButton
  ]
})
export class AddComponent implements OnInit {

  languages: Language[];
  snippets: FirebaseListObservable<Snippet[]>;
  authData: FirebaseAuthState;


  snippetForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
  });

  constructor(private router: Router, public af: AngularFire) {}

  ngOnInit() {
    this.af.auth.subscribe((ad: FirebaseAuthState) => {
      this.authData = ad;
    });

    this.af.database.list('/languages').subscribe((val: Language[]) => {
      this.languages = val;
    });

    this.snippets = this.af.database.list('/snippets');


  }

  onSubmit() {
    let now = new Date().getTime();
    let newSnippet = this.snippetForm.value;

    newSnippet['authorUID'] = this.authData.uid;
    newSnippet['authorName'] = this.authData.auth.displayName;
    newSnippet['createdDate'] = now;
    newSnippet['updatedDate'] = now;
    newSnippet['score'] = 0;

    let selectedLang: Language = this.languages.filter((val: Language) => {
      return val.$key === this.snippetForm.value.language;
    }).pop();

    newSnippet['languageAlias'] = selectedLang.alias;
    newSnippet['languageDisplayName'] = selectedLang.displayName;

    this.snippets.push(newSnippet);
    this.router.navigate(['/snippets']);
  }

  onCancel() {
    this.router.navigate(['/snippets']);
  }

}
