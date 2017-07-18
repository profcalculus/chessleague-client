import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';
import { LocalDataSource } from 'ng2-smart-table';
import { TeamLinkComponent } from '../team/team-link.component';
import { PlayerLinkComponent } from './player-link.component';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {

  players: LocalDataSource;

  settings = {
    columns: {
      link: {
        title: 'Name',
        type: 'custom',
        renderComponent: PlayerLinkComponent,
        compareFunction: PlayersComponent.compareNames,
      },
      dob: {
        title: 'Date of Birth'
      },
      team: {
        title: 'Team',
        type: 'custom',
        renderComponent: TeamLinkComponent,
        compareFunction: PlayersComponent.compareNames,
      },
    },
    actions: {
      add: true,
      edit: true,
      delete: true,
      position: 'right',
    },
    add: {
    addButtonContent: '<span class="glyphicon glyphicon-plus"></span>',
    editButtonContent: '<span class="glyphicon glyphicon-pencil">EDIT ME</span>',
    cancelButtonContent: '<span class="glyphicon glyphicon-remove">CANCEL ME</span>',
     confirmCreate: true,
   },

  };

  currentPlayer = 'Joe Bloggs';
  errorMessage: string;

  private static compareNames(direction: any, link1: any, link2: any) {
    if (link1.name < link2.name) {
      return -1 * direction;
    }
      if (link1.name > link2.name) {
        return direction;
      }
      return 0;
    }

  constructor(private playerService: PlayerService) {
    this.players = new LocalDataSource();
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers()
      .subscribe(
        players => {
          console.log(JSON.stringify(players));
          this.players.load(players);
        });
      }

  addPlayer() { }

}
