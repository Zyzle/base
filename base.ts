import {Component, View, bootstrap, formDirectives, NgFor} from 'angular2/angular2';
import {Router, RouterOutlet, RouteConfig, RouterLink, routerInjectables} from 'angular2/router';

import { HomePage } from 'components/home-page/home';
import { FormTest } from 'components/simple-form/form';

@RouteConfig([
  { path: "/", as: "home", component: HomePage },
  { path: "/formtest", as: "formtest", component: FormTest }
])
@Component({
  selector: 'base-app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  templateUrl:'base-app.html'
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
