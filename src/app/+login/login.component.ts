import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

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

  constructor(private formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  login() {
    console.log("doing login");
  }

}
