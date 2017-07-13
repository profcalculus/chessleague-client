import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Game } from './game.model';
import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
  private gamesUrl = environment.restUrl + 'games/';
  constructor(private http: Http) { }
  private _games: Game[];
  private headers = new Headers ({'Content-Type': 'application/json'});


  getGames(): Observable<Game[]> {
    return this.http.get(this.gamesUrl)
      .map(resp => this.extractData(resp))
      .catch(this.handleError);
  }

  private extractData(resp: Response) : Game[]{
    this._games = resp.json().items as Game[];
    console.dir(this._games)
    return this._games;
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

  getGame(id: number): Observable<Game> {
    let game: Game;
    return this.getGames()
      .map(games => games.filter(g => g.id === id) [0]);
    }
    addGame(game: Game): Observable<Game> {
      return this.http.post(
        this.gamesUrl,
        JSON.stringify(game),
         {headers : this.headers })
      .map(res => res.json() as Game)
      .catch(this.handleError);
    }
    updateGame(game: Game):Observable<Game> {
        const url = `${this.gamesUrl}/${game.id}`;
        return this.http
          .put(url, JSON.stringify(game), { headers: this.headers })
          .catch(this.handleError);
      }

      deleteGame(game: Game): Observable<void> {
        const url = `${this.gamesUrl}/${game.id}`;
        return this.http.delete(url, { headers: this.headers })
          .catch(this.handleError);
      }

  }
