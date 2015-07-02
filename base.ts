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
  directives: [formDirectives, RouterLink],
  templateUrl: 'templates/form-test.html'
})
class FormTest {
  name: string;
  router: Router;

  constructor(router: Router){
    this.router = router;
    this.name = "";
  }

  hello(): void {
      alert("hello, " + this.name);
  }
}

@RouteConfig([
  { path: "/", as: "home", component: HomePage },
  { path: "/formtest", as: "formtest", component: FormTest }
])
@Component({
  selector: 'base-app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  templateUrl:'templates/base-app.html'
})
class BaseComponent {
  router: Router;

  constructor(router: Router){
    this.router = router;
  }
}

bootstrap(BaseComponent, [routerInjectables])
  .then(
    success => console.log(success),
    error => console.log(error)
  );
