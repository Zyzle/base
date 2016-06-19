import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

import { AngularFire, FirebaseAuthState, FirebaseListObservable } from 'angularfire2';

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

  languages: FirebaseListObservable<any>;
  snippets: FirebaseListObservable<any>;
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
    this.languages = this.af.database.list('/languages');
    this.snippets = this.af.database.list('/snippets');
  }

  onSubmit() {
    let now = new Date().getTime();
    let newSnippet = this.snippetForm.value;
    newSnippet['author'] = this.authData.uid;
    newSnippet['createdDate'] = now;
    newSnippet['updatedDate'] = now;

    this.snippets.push(newSnippet);
    console.log('trying redirect');
    this.router.navigate(['/snippets']);
  }

}
