import {NgFor, Component, View, bootstrap, bind, Injectable} from 'angular2/angular2';
import {Router, RouteConfig, RouterLink, RouterOutlet, routerInjectables} from 'angular2/router';

@Component({
  selector: 'other-page'
})
@View({
  templateUrl: 'templates/other-page.html'
})
class OtherPage {

}

@Component({
  selector: 'home-page'
})
@View({
  templateUrl: 'templates/home-page.html'
})
class HomePage {

}

@RouteConfig([
  { path: "/", redirectTo: '/home'},
  { path: "/home", as: "home", component: HomePage },
  { path: "/other", as: "other", component: OtherPage }
])
@Component({
  selector: 'base-app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  templateUrl: 'templates/base-app.html'
})
class BaseApp{

}


bootstrap(BaseApp, [routerInjectables])
  .then(
    success => console.log(success),
    error => console.log(error)
  );
