import {Component, View, bootstrap, formDirectives} from 'angular2/angular2';
import {Router, RouterOutlet, RouteConfig, RouterLink, routerInjectables} from 'angular2/router';

@Component({
  selector: 'home-page'
})
@View({
  templateUrl: 'templates/home-page.html'
})
class HomePage {

}

@Component({
  selector: 'form-test'
})
@View({
  directives: [formDirectives],
  templateUrl: 'templates/form-test.html'
})
class FormTest {
  name: string;

  hello(): void {
      alert("hello, " + this.name);
  }
  constructor() {
      this.name = "";
  }
}

@RouteConfig([
  { path: "/", redirectTo: '/home'},
  { path: "/home", as: "home", component: HomePage },
  { path: "formtest", as: "formtest", component: FormTest }
])
@Component({
  selector: 'base-app',
  appInjector: [routerInjectables]
})
@View({
  directives: [RouterOutlet, RouterLink],
  templateUrl:'templates/base-app.html'
})
class BaseComponent {

}

bootstrap(BaseComponent)
  .then(
    success => console.log(success),
    error => console.log(error)
  );
