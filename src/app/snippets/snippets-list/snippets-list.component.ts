import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { ListDatabase, ListSource } from '../../core/list-tools';
import { Snippet } from '../snippets.models';

@Component({
  selector: 'base-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: ['./snippets-list.component.scss']
})
export class SnippetsListComponent implements OnChanges, OnInit {

  @Input()
  snippets: Snippet[];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  snippetsDatabase: ListDatabase<Snippet>;
  snippetsSource: ListSource<Snippet> | null;
  displayedColumns = ['image', 'name', 'score', 'updated'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.snippets && !changes.snippets.firstChange) {
      this.snippetsDatabase.dataChange$.next(this.snippets);
    }
  }

  ngOnInit() {
    this.snippetsDatabase = new ListDatabase(this.snippets);
    this.snippetsSource = new ListSource(this.snippetsDatabase, this.paginator, this.sort);
  }

  getSvgPath(alias) {
    return `assets/language_icons/${alias}.svg`;
  }

}
