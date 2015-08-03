export class Snippet {
  constructor (
    public id: number = 0,
    public pub_date: Date = null,
    public updated_date: Date = null,
    public title: string = '',
    public description: string = '',
    public snippet: string = '',
    public snippet_html: string = '',
    public lexer_name: string = '',
    public usefulness: number = 0
  ){}

  static fromJSON(json: any){
    return new Snippet(
      json.id,
      json.pub_date,
      json.updated_date,
      json.title,
      json.description,
      json.snippet,
      json.snippet_html,
      json.lexer_name,
      json.usefulness
    );
  }
}
