import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { LanguagesDatabase } from './languages-database';
import { Language } from '../snippets.models';

export class LanguagesSource extends DataSource<Language> {

  constructor(private _languagesDatabase: LanguagesDatabase, private _paginator: MatPaginator,
    private _sort: MatSort) {
    super();
  }

  connect(): Observable<Language[]> {
    const displayDataChanges = [
      this._languagesDatabase.dataChange$,
      this._paginator.page,
      this._sort.sortChange
    ];

    return Observable.merge(...displayDataChanges)
      .map(() => {
        const data = this.getSortedData().slice();
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;

        return data.splice(startIndex, this._paginator.pageSize);
      });
  }

  disconnect() { }

  getSortedData(): Language[] {
    return this._languagesDatabase.data.slice();
  }
}
