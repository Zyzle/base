import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-snippets',
  templateUrl: 'snippets.component.html',
  styleUrls: ['snippets.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})
export class SnippetsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
