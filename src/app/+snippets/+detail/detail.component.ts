import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import {MdProgressCircle, MdSpinner} from '@angular2-material/progress-circle';
import { MdToolbar } from '@angular2-material/toolbar';

import { HighlightDirective } from '../shared/highlight.directive';
import { Snippet } from '../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: [
    'detail.component.css',
    '../shared/highlight.directive.css'
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    HighlightDirective,
    MdButton,
    MdIcon,
    MdToolbar,
    MdProgressCircle,
    MdSpinner
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

  constructor(r: ActivatedRoute, private af: AngularFire) {
    r.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.snippet = this.af.database.object('/snippets/' + this.id);
    this.snippet.map(() => {
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

}
