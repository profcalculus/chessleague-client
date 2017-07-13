"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var PlayerService = (function () {
    function PlayerService(http, config) {
        this.http = http;
        this.config = config;
        // private playersUrl = this.config.apiEndpoint+'/players';
        this.playersUrl = 'http://localhost:5000/chessleague/api/1.0' + 'players/';
    }
    PlayerService.prototype.getPlayers = function () {
        console.log('playersUrl=' + this.playersUrl);
        return this.http.get(this.playersUrl)
            .map(this.extractData)["catch"](this.handleError);
    };
    PlayerService.prototype.extractData = function (res) {
        console.log('RESPONSE = ' + res);
        var body = res.json();
        var players = body['items'];
        console.log('PLAYERS = ' + JSON.stringify(players));
        return players;
    };
    PlayerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable["throw"](errMsg);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable()
], PlayerService);
exports.PlayerService = PlayerService;
