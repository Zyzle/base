import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Language } from '../snippets.models';
import { SnippetsState, getLanguagesList } from '../snippets.reducers';

@Component({
  selector: 'base-snippets-main-page',
  templateUrl: './snippets-main-page.component.html',
  styleUrls: ['./snippets-main-page.component.scss']
})
export class SnippetsMainPageComponent implements OnInit {

  languagesList$: Observable<Language[]>;

  constructor(private _store: Store<SnippetsState>) {
    this.languagesList$ = _store.select(getLanguagesList);
  }

  ngOnInit() {
  }

}
