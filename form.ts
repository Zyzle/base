import { Component, View, NgFor, formDirectives } from 'angular2/angular2';
import { Router, RouterLink } from 'angular2/router';


@Component({
  selector: 'form-test'
})
@View({
  directives: [formDirectives, RouterLink, NgFor],
  templateUrl: 'templates/form-test.html'
})
export class FormTest {
  name: string;
  names: Array<string>;
  router: Router;

  constructor(router: Router){
    this.router = router;
    this.name = "";
    this.names = localStorage.getItem("names") !== null ? JSON.parse(localStorage.getItem("names")) : [];
  }

  addName(): void {
      this.names.push(this.name);
      this.name = "";
  }

  clearList(): void {
    this.names = [];
    localStorage.removeItem("names");
  }

  saveList(): void {
    localStorage.setItem("names", JSON.stringify(this.names));
  }
}
