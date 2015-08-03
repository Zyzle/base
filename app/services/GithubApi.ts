import {Http} from 'angular2/angular2';
import {Observable} from 'rx';

import {RestService} from './RestService';
import {GithubRepo, GithubUser} from '../models/GhModels';

export class GithubApi extends RestService {
  constructor(http: Http){
    super('https://api.github.com/', http);
  }

  getUser(username: string): Observable<any> {
    return this.get('users/' + username);
  }

  getUserRepos(username: string): Observable<any> {
    return this.get('users/' + username + '/repos');
  }
}
