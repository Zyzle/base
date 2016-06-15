import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'app-highlight-test',
  templateUrl: 'highlight-test.component.html',
  styleUrls: ['highlight-test.component.css'],
  directives: [
    HighlightDirective
  ],
  encapsulation: ViewEncapsulation.None
})
export class HighlightTestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
