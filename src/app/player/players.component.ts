import { ViewCell } from 'ng2-smart-table'
import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';
import { LocalDataSource } from 'ng2-smart-table';
import { TeamLinkComponent } from '../team/team-link.component';
import { PlayerLinkComponent } from './player-link.component';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['../shared/shared-styles.css',
  '../../assets/ionicfonts/css/ionicons.min.css'],
})
export class PlayersComponent implements OnInit {

  players: LocalDataSource;

  settings = {
    columns: {
      "{name: name,id: id}": {
        title: 'Name',
        type: 'custom',
        renderComponent: PlayerLinkComponent,
        sort: true,
        compareFunction: PlayersComponent.compareNames,
      },
      dob: {
        title: 'Date of Birth'
      },
      team: {
        title: 'Team',
        type: 'custom',
        renderComponent: TeamLinkComponent,
      },
    },
  //   add: {
  //   addButtonContent: '<i class="ion-ios-plus-outline"></i>',
  //   createButtonContent: '<i class="ion-checkmark"></i>',
  //   cancelButtonContent: '<i class="ion-close"></i>',
  //    confirmCreate: true,
  //  },
  };

  currentPlayer = 'Joe Bloggs';
  errorMessage: string;

  constructor(private playerService: PlayerService) {
    this.players = new LocalDataSource();
  }

  ngOnInit() {
    this.getPlayers();
  }

  private static compareNames(direction: any, link1:any, link2:any) {
    if (link1.name < link2.name) {
      return -1 * direction;
    }
      if (link1.name > link2.name) {
        return direction;
      }
      return 0;
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
