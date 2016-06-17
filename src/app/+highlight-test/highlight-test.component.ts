import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


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

  snippet: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.snippet = this.af.database.object('/snippets/-KKdWTzjJqlWkmP462qg');
  }

}
