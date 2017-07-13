import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Player } from './player.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayerService {
  private playersUrl = environment.restUrl + 'players/';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  private _players: Player[];

  getPlayers(): Observable<Player[]> {
    return this.http.get(this.playersUrl)
      .map(resp => this.extractData(resp))
      .catch(this.handleError);
  }

  private extractData(resp: Response) : Player[]{
    this._players = resp.json().items
     .map(player => Player.fromJson(player));
    console.dir(this._players)
    return this._players;
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

  getPlayer(id: number): Observable<Player> {
    let player: Player;
    return this.getPlayers()
      .map(players => players.filter(p => p.id === id) [0]);
    }

    addPlayer(player: Player): Observable<Player> {
      return this.http.post(
        this.playersUrl,
        JSON.stringify(player),
         {headers : this.headers })
      .map(res => res.json() as Player)
      .catch(this.handleError);
    }
    updatePlayer(player: Player):Observable<Player> {
        const url = `${this.playersUrl}/${player.id}`;
        return this.http
          .put(url, JSON.stringify(player), { headers: this.headers })
          .catch(this.handleError);
      }

      deletePlayer(player: Player): Observable<void> {
        const url = `${this.playersUrl}/${player.id}`;
        return this.http.delete(url, { headers: this.headers })
          .catch(this.handleError);
      }

  }
