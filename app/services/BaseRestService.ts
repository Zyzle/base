import {Http} from 'angular2/angular2';
import {Observable} from 'rx';

export class BaseRestService {
  constructor(protected baseUrl: string, protected http: Http){
  }

  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url).toRx().map(res => res.json());
  }

  /*post(url: string, data: any): any {

  }

  delete(url: string): any {

  }*/
}
