export class GithubApi {
  baseUrl: string;

  constructor(){
    //this.http = http;
    this.baseUrl = "https://api.github.com";
  }

  getUserRepos(user: string): Promise<Response> {
    return window.fetch(this.baseUrl + "/users/" + user + "/repos");
  }

  getUser(user: string): Promise<Response> {
    return window.fetch(this.baseUrl + "/users/" + user);
  }
}
