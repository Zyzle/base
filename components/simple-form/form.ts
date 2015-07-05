import { Component, View, NgFor, formDirectives } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';

import { PersistedList } from '../../services/PersistedList';


@Component({
  selector: 'form-test',
  viewInjector: [PersistedList]
})
@View({
  directives: [formDirectives, RouterLink, NgFor],
  templateUrl: './components/simple-form/form-test.html'
})
export class FormTest {
  name: string;
  router: Router;
  namesList: PersistedList;

  constructor(router: Router, namesList: PersistedList){
    this.router = router;
    this.name = "";
    this.namesList = namesList;
  }

  getNames(): Array<string> {
    return this.namesList.get();
  }

  addName(): void {
      this.namesList.push(this.name);
      this.name = "";
  }

  clearList(): void {
    this.namesList.clear();
  }

  saveList(): void {
    this.namesList.persist();
  }
}
