export class GithubApi {
  baseUrl: string;

  constructor(){
    //this.http = http;
    this.baseUrl = "https://api.github.com";
  }

  getMyRepos(): Promise<Response> {
    return window.fetch(this.baseUrl + "/users/zyzle/repos");
  }
}
