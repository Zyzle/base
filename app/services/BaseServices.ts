import {Headers, Http} from 'angular2/angular2';
import {Observable} from 'rx';

import {RestService} from './RestService';

export class LoginService extends RestService {

  constructor(http: Http){
    super('http://localhost:8000/', http);

    let headers = new Headers();
    headers.set('Content-Type', 'application/json;charset=UTF-8');

    this.requestOptions = {
      headers: headers
    };
  }

  /* would be better if this was creating its own observable*/
  doLogin(username: string, password: string): Observable<any> {
    let data = { 'username': username, 'password': password};

    let result = this.post('api-token-auth/', JSON.stringify(data));

    result.subscribe(res => {

      if (res['token']){
        this.saveToken(res['token']);
      }
      else {
        console.log("Error");
        console.log(res);
      }

    });

    return result;
  }

  doLogout(){
    localStorage.removeItem("base_token");
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("base_token") != null;
  }

  getToken(): string {
    return localStorage.getItem("base_token");
  }

  private saveToken(token: string): void {
    localStorage.setItem("base_token", token);
  }

}

export class SnippetService extends RestService {

  constructor(http: Http){
    super('http://localhost:8000/snippets/api/', http);

    let headers = new Headers();
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    headers.set('Authorization', 'Token ' + localStorage.getItem('base_token'));

    this.requestOptions = {
      headers: headers
    };
  }

  getSnippetsList(): Observable<any> {
    return this.get('snippets/');
  }

}
