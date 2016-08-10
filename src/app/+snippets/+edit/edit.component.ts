import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

import { AngularFire, FirebaseAuthState, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Language, Snippet } from '../shared/models';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES
  ]
})
export class EditComponent implements OnInit {

  id: string;
  snippet: Snippet;
  snippetObservable: FirebaseObjectObservable<Snippet>;
  snippets: FirebaseListObservable<Snippet[]>;
  loaded: boolean = false;
  languages: Language[];
  authData: FirebaseAuthState;
  snippetForm: FormGroup;

  constructor(r: ActivatedRoute, private router: Router, private af: AngularFire) {
    r.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.af.auth.subscribe((ad: FirebaseAuthState) => {
      this.authData = ad;
    });

    this.af.database.list('/languages')
    .subscribe((val: Language[]) => {
      this.languages = val;
    });

    this.snippetObservable = this.af.database.object('/snippets/' + this.id);

    this.snippetObservable
    .subscribe((s: Snippet) => {
      this.loaded = true;
      this.snippet = s;

      this.snippetForm = new FormGroup({
        name: new FormControl(this.snippet.name, Validators.required),
        language: new FormControl(this.snippet.language, Validators.required),
        description: new FormControl(this.snippet.description, Validators.required),
        code: new FormControl(this.snippet.code, Validators.required)
      });

    });

    this.snippets = this.af.database.list('/snippets');

  }

  onSubmit() {
    let now = new Date().getTime();
    let newSnippet = this.snippetForm.value;

    newSnippet['authorUID'] = this.authData.uid;
    newSnippet['authorName'] = this.authData.auth.displayName;
    newSnippet['updatedDate'] = now;

    let selectedLang: Language = this.languages.filter((val: Language) => {
      return val.$key === this.snippetForm.value.language;
    }).pop();

    newSnippet['languageAlias'] = selectedLang.alias;
    newSnippet['languageDisplayName'] = selectedLang.displayName;

    this.snippetObservable.update(newSnippet);
    this.router.navigate(['/snippets', this.snippet.$key]);
  }

  onCancel() {
    this.router.navigate(['/snippets', this.snippet.$key]);
  }

}
