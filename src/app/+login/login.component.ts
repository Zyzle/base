import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlGroup, FormBuilder, Validators } from '@angular/common';

import { MD_CARD_DIRECTIVES} from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdButton,
    MdToolbar
  ],
  providers: [
    FormBuilder
  ]
})
export class LoginComponent implements OnInit {

  loginForm: ControlGroup;

  private validationMessages;

  private formError;

  constructor(private formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(data => {
      this.checkChanged(data);
    });

    this.formError = {
      'username': '',
      'password': ''
    };

    this.validationMessages = {
      'username': {
        'required': 'Please enter your username'
      },
      'password': {
        'required': 'Please enter your password'
      }
    };

  }

  checkChanged(form) {
    for (let control in this.loginForm.controls){
      let hasError = this.loginForm.controls[control].dirty && !this.loginForm.controls[control].valid;
      this.formError[control] = '';
      if (hasError){
        for (let key in this.loginForm.controls[control].errors){
          if (this.loginForm.controls[control].errors.hasOwnProperty(key)){
            this.formError[control] += this.validationMessages[control][key] + ' ';
          }
        }
      }
    }
  }

  ngOnInit() {
  }

  login() {

  }

}
