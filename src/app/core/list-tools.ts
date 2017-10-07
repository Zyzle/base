import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort } from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export type DataSorter<T> = (data: T[]) => T[];
export type DataFilter<T> = (data: T, index?: number, array?: T[]) => boolean;

export class ListDatabase<T> {

  dataChange$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  get data(): T[] {
    return this.dataChange$.value;
  }

  constructor(initialData: T[]) {
    this.dataChange$.next(initialData);
  }
}

export class ListSource<T> extends DataSource<T> {

  private _filterChange = new BehaviorSubject('');
  get filter(): string {
    return this._filterChange.value;
  }
  set filter(filterVal: string) {
    this._filterChange.next(filterVal);
  }

  constructor(private _database: ListDatabase<T>, private _padingatorControl: MatPaginator,
    private _sortControl: MatSort, private _sorter?: DataSorter<T>, private _filter?: DataFilter<T>) {
      super();
  }

  connect(): Observable<T[]> {
    const displayDataChanges = [
      this._database.dataChange$,
      this._padingatorControl.page,
      this._sortControl.sortChange,
      this._filterChange
    ];

    return Observable.merge(...displayDataChanges)
      .map(() => {
        let data = this._database.data.slice();
        data = this._filter ? data.filter(this._filter) : data;
        data = this._sorter ? this._sorter(data) : data;
        const startIndex = this._padingatorControl.pageIndex * this._padingatorControl.pageSize;

        return data.splice(startIndex, this._padingatorControl.pageSize);
      });
  }

  disconnect() { }
}
