import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-snippets',
  templateUrl: 'snippets.component.html',
  styleUrls: ['snippets.component.css'],
  directives: [
    MdButton,
    ROUTER_DIRECTIVES
  ]
})
export class SnippetsComponent implements OnInit {

  snip: number = 1;

  constructor() {}

  ngOnInit() {
  }

}
