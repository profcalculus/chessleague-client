import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

import { Match } from './match.model';

@Injectable()
export class MatchService {
  private matchesUrl = environment.restUrl + '/matches/';
  constructor(private http: Http) {}

  getMatches(): Observable<Match[]> {
    return this.http.get(this.matchesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    const matches = <Match[]>body['items'];
    return matches;
  }

  private handleError(error: Response | any) {
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
   }
}
