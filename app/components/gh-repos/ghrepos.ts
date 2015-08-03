import {Component, View, NgFor, NgIf, Http} from 'angular2/angular2';
import {Router} from 'angular2/router';

import {GithubApi} from '../../services/GithubApi';
import {GithubRepo, GithubUser} from '../../models/GhModels';


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
  ghApi: GithubApi;

  loadingUser: boolean = true;

  constructor(private router: Router, private http: Http){
    this.router = router;
    this.http = http;
    this.user = new GithubUser();
    this.repos = [];
    this.ghApi = new GithubApi(this.http);

    this.ghApi.getUser('zyzle')
      .subscribe(res => {
        this.user = GithubUser.fromJSON(res)
        this.loadingUser = false;
      });

    this.ghApi.getUserRepos('zyzle')
      .subscribe(res => this.buildRepos(res));

  }

  buildRepos(data: any): void {
    for(let i = 0; i < data.length; i++){
      this.repos.push(GithubRepo.fromJSON(data[i]));
    }
  }

}
