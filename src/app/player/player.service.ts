import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Player } from './player.model';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayerService {
    private playersUrl = environment.restUrl + 'players/';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private _players = new BehaviorSubject<Array<Player>>([]);
    // @Output() dataChanged: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http) { }

    getPlayers(): BehaviorSubject<Player[]> {
        this.http.get(this.playersUrl)
            .subscribe(
            resp => {
                this._players.next(resp.json().items
                    .map(player => Player.fromJson(player)));
            },
            error => {
                this.handleError(error);
            });
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

    getPlayer(id: number): Player {
        const players: Player[] = this._players.value;
        const index = players.findIndex(player => player.id === id);
        if (index > -1) {
            return players[index];
        }
        return null;
    }

    private _localUpdatePlayer(player: Player): void {
        const players: Player[] = this._players.value;
        const index = players.findIndex(p => p.id === player.id);
        if (index > -1) {
            this._players.value[index] = player;
            // this.dataChanged.emit();
        }
    }
    private _localDeletePlayer(player: Player): void {
        const players: Player[] = this._players.value;
        const index = players.findIndex(p => p.id === player.id);
        if (index > -1) {
            players.splice(index);
            this._players.next(players);
            // this.dataChanged.emit();
        }
    }

    private _localAddPlayer(player: Player): void {
        const players: Player[] = this._players.value;
        players.push(player);
        this._players.next(players);

        // this.dataChanged.emit();
    }

    addPlayer(player: Player): void {
        this.http.post(
            this.playersUrl,
            JSON.stringify(player),
            { headers: this.headers })
            .map(res => res.json() as Player)
            .subscribe(newPlayer => {
                this._localAddPlayer(newPlayer);
                console.log('Player added: ' + JSON.stringify(newPlayer));
            });
    };

    updatePlayer(player: Player): void {
        const url = `${this.playersUrl}${player.id}`;
        const resp = this.http
            .put(url, JSON.stringify(player), { headers: this.headers })
            .map(res => res.json() as Player)
            .subscribe(() => {
                this._localUpdatePlayer(player);
                console.log('Player updated: ' + JSON.stringify(player));
            });
    };

    deletePlayer(player: Player): void {
        const url = `${this.playersUrl}${player.id}`;
        const resp = this.http.delete(url, { headers: this.headers })
            .subscribe(resp => this._localDeletePlayer(player));
        console.log('Player deleted: ' + JSON.stringify(player));
    };
}
