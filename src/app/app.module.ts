import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {PlayerService} from './player/player.service';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './player/players.component';
import { PlayerLinkComponent } from './player/player-link.component';
import { PlayersLinkComponent } from './player/players-link.component';
import { TeamService } from './team/team.service';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './team/teams.component';
import { MatchComponent } from './match/match.component';
import { MatchesComponent } from './match/matches.component';
import { MatchService } from './match/match.service'
import { GameComponent } from './game/game.component';
import { GamesComponent } from './game/games.component';
import { GameService } from './game/game.service'
import { UserComponent } from './user/user.component';
import { UsersComponent } from './user/users.component';
import { UsersLinkComponent } from './user/users-link.component';
import { UserService } from './user/user.service'
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TeamLinkComponent } from './team/team-link.component';

const appRoutes: Routes = [
  {path: 'players', component: PlayersComponent },
  {path: 'players/:id', component: PlayerComponent },
  {path: 'teams', component: TeamsComponent },
  {path: 'teams/:id', component: TeamComponent },
  {path: 'matches', component: MatchesComponent },
  {path: 'matches/:id', component: MatchComponent },
  {path: 'games', component: GamesComponent },
  {path: 'games/:id', component: GameComponent },
  {path: 'users', component: UsersComponent },
  {path: 'users/:id', component: UserComponent },
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo: '/players', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    PlayerComponent,
    TeamComponent,
    TeamsComponent,
    MatchComponent,
    MatchesComponent,
    GameComponent,
    GamesComponent,
    UserComponent,
    UsersComponent,
    UsersLinkComponent,
    LoginComponent,
    PageNotFoundComponent,
    TeamLinkComponent,
    PlayerLinkComponent,
    PlayersLinkComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2SmartTableModule,
  ],
  providers: [
    PlayerService,
    TeamService,
    UserService,
    MatchService,
    GameService,
],
  entryComponents: [
    TeamLinkComponent,
    PlayerLinkComponent,
    PlayersLinkComponent,
    UsersLinkComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
