import {Http, IRequestOptions} from 'angular2/angular2';
import {Observable} from 'rx';

export class RestService {

  protected requestOptions: IRequestOptions;

  constructor(protected baseUrl: string, protected http: Http){
  }

  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url, this.requestOptions).toRx().map(res => res.json());
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data, this.requestOptions).toRx().map(res => res.json());
  }

  /*
  delete(url: string): any {

  }*/
}
