import { Component, View, NgFor } from 'angular2/angular2';
import { Router } from 'angular2/router';

import { GithubApi } from '../../services/GithubApi';
import { GithubRepo } from '../../models/GhRepo';

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
  repos: Array<GithubRepo>;
  router: Router;

  constructor(router: Router, ghApi: GithubApi){
    this.router = router;
    this.ghApi = ghApi;
    this.repos = [];
    this.getRepos();
  }

  getRepos(): void {
    this.ghApi.getMyRepos()
      .then(
        success => success.json(),
        error => console.log(error)
      )
      .then(
        json => this.parseResponse(json),
        error => console.log(error)
      );
  }

  parseResponse(data: any): void {
    for (let i = 0; i < data.length; i++) {
        this.repos.push(GithubRepo.fromJSON(data[i]));
    }
  }
}
