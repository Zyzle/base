import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Snippet } from '../snippets.models';

export class SnippetsDatabase {

  dataChange$: BehaviorSubject<Snippet[]> = new BehaviorSubject<Snippet[]>([]);

  get data(): Snippet[] {
    return this.dataChange$.value;
  }

  constructor(initialData: Snippet[]) {
    this.dataChange$.next(initialData);
  }
}
