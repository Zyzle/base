import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { HighlightDirective } from '../shared/highlight.directive';
import { Snippet } from '../shared/models';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: [
    'detail.component.css',
    '../shared/highlight.directive.css'
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    HighlightDirective,
    MD_ICON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES
  ],
  providers: [
    MdIconRegistry
  ],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  id: string;
  snippet: FirebaseObjectObservable<Snippet>;
  loaded: boolean = false;
  plusOned: boolean = false;
  score: number;

  constructor(ar: ActivatedRoute, private r: Router, private af: AngularFire) {
    ar.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.snippet = this.af.database.object('/snippets/' + this.id);
    this.snippet.map((s: Snippet) => {
      this.score = s.score;
      return true;
    })
    .subscribe((b: boolean) => {
      this.loaded = b;
    });
  }

  getImage() {
    let lang;
    this.snippet.map((s: Snippet) => {
      return s.languageAlias;
    })
    .subscribe((alias: string) => {
      lang = alias;
    });

    return 'assets/' + lang + '.svg';
  }

  goBack() {
    this.r.navigate(['/snippets']);
  }

  plusOne() {
    if (!this.plusOned) {
      this.snippet.update({score: (this.score + 1) });
      this.plusOned = true;
    }
  }

}
