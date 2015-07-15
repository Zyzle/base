import { Component, View, NgFor, Http } from 'angular2/angular2';
import { Router } from 'angular2/router';

import { GithubApi } from '../../services/GithubApi';
import { GithubRepo, GithubUser } from '../../models/GhModels';

@Component({
  selector: 'gh-repos',
  viewInjector: [GithubApi]
})
@View({
  directives: [NgFor],
  templateUrl: './components/gh-repos/gh-repos.html'
})
export class GhRepos {
  ghApi: GithubApi;
  user: GithubUser;
  router: Router;
  http: Http;

  constructor(router: Router, ghApi: GithubApi, http: Http){
    this.router = router;
    this.ghApi = ghApi;
    this.user = new GithubUser();
    this.http = http;

    this.http.get('https://api.github.com/users/zyzle')
      .toRx()
      .map(res => res.json())
      .subscribe(res => this.user = GithubUser.fromJSON(res)
    );

  }

}
