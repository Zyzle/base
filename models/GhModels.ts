export class GithubUser {
  constructor(
    public login: string = '',
    public id: number = 0,
    public avatar_url: string = '',
    public html_url: string = '',
    public name: string = '',
    public company: string = '',
    public location: string = '',
    public email: string = '',
    public hireable: boolean = false,
    public bio: string = '',
    public created_at: Date = null
    ){}

    static fromJSON(json: any){
      return new GithubUser(
        json.login,
        json.id,
        json.avatar_url,
        json.html_url,json.name,
        json.company,
        json.location,
        json.email,
        json.hireable,
        json.bio,
        json.created_at
        );
    }
}

export class GithubRepo {
  constructor(
    public name: string = '',
    public html_url: string = '',
    public pushed_at: Date = null,
    public size: number = 0
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
