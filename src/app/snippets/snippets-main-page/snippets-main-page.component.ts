import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Language, Snippet } from '../snippets.models';
import { SnippetsState, getLanguagesList, getSnippetsList } from '../snippets.reducers';

@Component({
  selector: 'base-snippets-main-page',
  templateUrl: './snippets-main-page.component.html',
  styleUrls: ['./snippets-main-page.component.scss']
})
export class SnippetsMainPageComponent implements OnInit {

  languagesList$: Observable<Language[]>;
  snippetsList$: Observable<Snippet[]>;

  constructor(private _store: Store<SnippetsState>) {
    this.languagesList$ = _store.select(getLanguagesList);
    this.snippetsList$ = _store.select(getSnippetsList);
  }

  ngOnInit() {
  }

}
