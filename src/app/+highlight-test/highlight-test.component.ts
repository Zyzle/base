import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Highlight } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'app-highlight-test',
  templateUrl: 'highlight-test.component.html',
  styleUrls: ['highlight-test.component.css'],
  directives: [
    Highlight
  ],
  encapsulation: ViewEncapsulation.None
})
export class HighlightTestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
