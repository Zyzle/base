import {Component, View, bootstrap, httpInjectables} from 'angular2/angular2';
import {Router, RouterOutlet, RouteConfig, RouterLink, routerInjectables} from 'angular2/router';

import { HomePage } from 'components/home-page/home';
import { FormTest } from 'components/simple-form/form';
import { GhRepos } from './components/gh-repos/ghrepos';

import { PersistedList } from './services/PersistedList';

@RouteConfig([
  { path: "/", as: "home", component: HomePage },
  { path: "/formtest", as: "formtest", component: FormTest },
  { path: "/ghrepos", as: "ghrepos", component: GhRepos }
])
@Component({
  selector: 'base-app',
  viewInjector: [PersistedList]
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

bootstrap(BaseComponent, [routerInjectables, httpInjectables])
  .then(
    success => console.log(success),
    error => console.log(error)
  );
