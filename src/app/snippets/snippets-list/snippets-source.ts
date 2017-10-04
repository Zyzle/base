import { DataSource } from '@angular/cdk/table';
import { MdPaginator, MdSort} from '@angular/material';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { SnippetsDatabase } from './snippets-database';
import { Snippet } from '../snippets.models';

export class SnippetsSource extends DataSource<Snippet> {

  constructor(private _SnippetsDatabase: SnippetsDatabase, private _paginator: MdPaginator,
    private _sort: MdSort) {
    super();
  }

  connect(): Observable<Snippet[]> {
    const displayDataChanges = [
      this._SnippetsDatabase.dataChange$,
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

  getSortedData(): Snippet[] {
    return this._SnippetsDatabase.data.slice();
  }

}
