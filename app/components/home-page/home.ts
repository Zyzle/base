import {Component, Http, NgIf, View, formDirectives} from 'angular2/angular2';

import {LoginService} from '../../services/BaseServices';

class UserModel {
  userName: string;
  password: string;
}

@Component({
  selector: 'home-page'
})
@View({
  templateUrl: './components/home-page/home-page.html',
  directives: [formDirectives, NgIf]
})
export class HomePage {
  model: UserModel = new UserModel();
  loginService: LoginService;
  isLoggedIn: boolean;

  constructor(private http: Http){
    this.loginService  = new LoginService(this.http);
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

  login(): void {
    this.loginService.doLogin(this.model.userName, this.model.password)
      .subscribe(res => {

        if (res['token']){
          console.log("woohoo :)");
        }
        else {
          console.log("aaw :(");
        }

        this.isLoggedIn = this.loginService.isLoggedIn();
      });
  }

  logout() {
    this.loginService.doLogout();
    this.isLoggedIn = this.loginService.isLoggedIn();
  }

}
