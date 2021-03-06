import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

// import { LanguagesDatabase } from './languages-database';
// import { LanguagesSource } from './languages-source';
import { ListDatabase, ListSource } from '../../core/list-tools';
import { Language } from '../snippets.models';

@Component({
  selector: 'base-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnChanges, OnInit {

  @Input()
  languages: Language[];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  languagesDatabase: ListDatabase<Language>;
  languagesSource: ListSource<Language> | null;
  displayedColumns = ['image', 'alias', 'displayName'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.languages && !changes.languages.firstChange) {
      this.languagesDatabase.dataChange$.next(this.languages);
    }
  }

  ngOnInit() {
    this.languagesDatabase = new ListDatabase(this.languages);
    this.languagesSource = new ListSource(this.languagesDatabase, this.paginator, this.sort);
  }

  getSvgPath(alias) {
    return `assets/language_icons/${alias}.svg`;
  }

}
