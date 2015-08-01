import { Component, View, NgFor, ElementRef, formDirectives } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';

import { PersistedList } from '../../services/PersistedList';


@Component({
  selector: 'form-test'
})
@View({
  directives: [formDirectives, RouterLink, NgFor],
  templateUrl: './components/simple-form/form-test.html'
})
export class FormTest {
  name: string;
  router: Router;
  namesList: PersistedList;
  eleRef: ElementRef;

  constructor(router: Router, namesList: PersistedList, eleRef: ElementRef){
    this.router = router;
    this.eleRef = eleRef;
    this.name = "";
    this.namesList = namesList;
  }

  somemethod(inp: any): void {
    console.log(inp);
    console.log("keyup!");
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
