import { Component, View, NgFor, NgIf, Http } from 'angular2/angular2';
import { Router } from 'angular2/router';

import { GithubRepo, GithubUser } from '../../models/GhModels';

@Component({
  selector: 'gh-repos'
})
@View({
  directives: [NgFor, NgIf],
  templateUrl: './components/gh-repos/gh-repos.html'
})
export class GhRepos {
  user: GithubUser;
  repos: Array<GithubRepo>;
  router: Router;
  http: Http;

  constructor(router: Router, http: Http){
    this.router = router;
    this.http = http;
    this.user = new GithubUser();
    this.repos = [];

    this.http.get('https://api.github.com/users/zyzle')
      .toRx()
      .map(res => res.json())
      .subscribe(res => this.user = GithubUser.fromJSON(res)
    );

    this.http.get('https://api.github.com/users/zyzle/repos')
      .toRx()
      .map(res => res.json())
      .subscribe(res => this.buildRepos(res)
    );

  }

  buildRepos(data: any): void {
    for(let i = 0; i < data.length; i++){
      this.repos.push(GithubRepo.fromJSON(data[i]));
    }
  }

}
