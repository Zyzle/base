import {Component, Http, View, NgFor} from 'angular2/angular2';
import {Router, RouterLink} from 'angular2/router';

import {SnippetService} from '../../services/BaseServices';

@Component({
  selector: 'snippets-list'
})
@View({
  directives: [RouterLink, NgFor],
  templateUrl: './components/snippets-list/snippets-list.html'
})
export class SnippetsList {
  snippetService: SnippetService;

  constructor(private router: Router, private http: Http){
    this.snippetService = new SnippetService(this.http);

    this.snippetService.getSnippetsList()
      .subscribe(res => console.log(res));
  }
}
