import { Component, OnInit } from '@angular/core';

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
  ]
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
