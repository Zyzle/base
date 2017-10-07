import { Component, ElementRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

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

  @ViewChild('filter')
  filter: ElementRef;

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
    this.snippetsSource = new ListSource(this.snippetsDatabase, this.paginator, this.sort,
      (data) => this.listSorter(data),
      (snippet, index, array) => this.listFilter(snippet, index, array));

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.snippetsSource) { return; }
        this.snippetsSource.filter = this.filter.nativeElement.value;
      });
  }

  getSvgPath(alias) {
    return `assets/language_icons/${alias}.svg`;
  }

  listSorter(data: Snippet[]): Snippet[] {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propA: number | string = '';
      let propB: number | string = '';

      switch (this.sort.active) {
        case 'image':
          [propA, propB] = [a.languageAlias, b.languageAlias];
          break;
        case 'name':
          [propA, propB] = [a.name, b.name];
          break;
        case 'score':
          [propA, propB] = [a.score, b.score];
          break;
        case 'updated':
          [propA, propB] = [a.updatedDate, b.updatedDate];
          break;
      }

      const valA = isNaN(+propA) ? propA : +propA;
      const valB = isNaN(+propB) ? propB : +propB;

      return (valA < valB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
    });
  }

  listFilter(snippet: Snippet, index: number, array: Snippet[]): boolean {
    return snippet.name.toLowerCase().includes(this.filter.nativeElement.value.toLowerCase())
      || snippet.description.toLowerCase().includes(this.filter.nativeElement.value.toLowerCase());
  }

}
