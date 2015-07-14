export class GithubRepo {
  constructor(
    public name: string = null,
    public html_url: string = null,
    public pushed_at: Date = null,
    public size: number = null
    ){}

  static fromJSON(json: any){
    return new GithubRepo(
      json.name,
      json.html_url,
      json.pushed_at,
      json.size
    );
  }
}
