import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Team } from './team.model';
import { environment } from '../../environments/environment';

@Injectable()
export class TeamService {
  private teamsUrl = environment.restUrl + 'teams/';
  private headers = new Headers ({'Content-Type': 'application/json'});
  private _teams: Team[];

  constructor(private http: Http) {}

  getTeams(): Observable<Team[]> {
    if (this._teams != null) {
      return Observable.of(this._teams);
    }
    return this.http.get(this.teamsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    this._teams = body['items'] as Team[];
    // Hack dob from a string (WTF??) back to a date
    // this._teams = Array.from(teams,
    //    p => {p.dob = new Date(Date.parse(p.dob)); return p});
    console.log('getTeams()' + JSON.stringify(this._teams));
    return this._teams;
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
   getTeam(id: number): Observable<Team> {
     return this.getTeams()
     .map(teams => teams.find(t => t.id === id));
   }

   addTeam(team: Team): Observable<Team> {
     return this.http.post(
       this.teamsUrl,
       JSON.stringify(team),
        {headers : this.headers })
     .map(res => res.json() as Team)
     .catch(this.handleError);
   }
   updateTeam(team: Team):Observable<Team> {
       const url = `${this.teamsUrl}/${team.id}`;
       return this.http
         .put(url, JSON.stringify(team), { headers: this.headers })
         .catch(this.handleError);
     }

     deleteTeam(team: Team): Observable<void> {
       const url = `${this.teamsUrl}/${team.id}`;
       return this.http.delete(url, { headers: this.headers })
         .catch(this.handleError);
     }

}
