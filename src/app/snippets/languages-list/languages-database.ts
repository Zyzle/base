import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Language } from '../snippets.models';

export class LanguagesDatabase {

  dataChange$: BehaviorSubject<Language[]> = new BehaviorSubject<Language[]>([]);

  get data(): Language[] {
    return this.dataChange$.value;
  }

  constructor(initialData: Language[]) {
    this.dataChange$.next(initialData);
  }
}
