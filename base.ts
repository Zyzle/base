import {Component, View, bootstrap} from 'angular2/angular2';
import {Router} from 'angular2/router';

@Component({
  selector: 'base-app'
})
@View({
  template: `<h1>HELLO WORLD!!!</h1>`
})
class BaseApp{

}


bootstrap(BaseApp);
