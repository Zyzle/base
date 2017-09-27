import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MdPaginator, MdSort } from '@angular/material';

import { LanguagesDatabase } from './languages-database';
import { LanguagesSource } from './languages-source';
import { Language } from '../snippets.models';

@Component({
  selector: 'base-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnChanges, OnInit {

  @Input()
  languages: Language[];

  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  @ViewChild(MdSort)
  sort: MdSort;

  languagesDatabase: LanguagesDatabase;
  languagesSource: LanguagesSource | null;
  displayedColumns = ['image', 'alias', 'displayName'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.languages && !changes.languages.firstChange) {
      this.languagesDatabase.dataChange$.next(this.languages);
    }
  }

  ngOnInit() {
    this.languagesDatabase = new LanguagesDatabase(this.languages);
    this.languagesSource = new LanguagesSource(this.languagesDatabase, this.paginator, this.sort);
  }

  getSvgPath(alias) {
    return `assets/language_icons/${alias}.svg`;
  }

}
