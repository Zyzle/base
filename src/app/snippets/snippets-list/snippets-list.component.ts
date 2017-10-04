import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MdPaginator, MdSort } from '@angular/material';

import { SnippetsDatabase } from './snippets-database';
import { SnippetsSource } from './snippets-source';
import { Snippet } from '../snippets.models';

@Component({
  selector: 'base-snippets-list',
  templateUrl: './snippets-list.component.html',
  styleUrls: ['./snippets-list.component.scss']
})
export class SnippetsListComponent implements OnChanges, OnInit {

  @Input()
  snippets: Snippet[];

  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  @ViewChild(MdSort)
  sort: MdSort;

  snippetsDatabase: SnippetsDatabase;
  snippetsSource: SnippetsSource | null;
  displayedColumns = ['image', 'name', 'score', 'updated'];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.snippets && !changes.snippets.firstChange) {
      this.snippetsDatabase.dataChange$.next(this.snippets);
    }
  }

  ngOnInit() {
    this.snippetsDatabase = new SnippetsDatabase(this.snippets);
    this.snippetsSource = new SnippetsSource(this.snippetsDatabase, this.paginator, this.sort);
  }

  getSvgPath(alias) {
    return `assets/language_icons/${alias}.svg`;
  }

}
