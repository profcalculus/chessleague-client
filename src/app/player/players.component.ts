import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';
import { LocalDataSource } from 'ng2-smart-table';
import { TeamLinkComponent } from '../team/team-link.component';
import { PlayerLinkComponent } from './player-link.component';
import { Util } from '../shared/utils';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {

  players: LocalDataSource;

  settings = {
    mode: 'external',
    columns: {
      link: {
        title: 'Name',
        type: 'custom',
        renderComponent: PlayerLinkComponent,
        compareFunction: Util.compareNames,
      },
      dob: {
        title: 'Date of Birth'
      },
      team: {
        title: 'Team',
        type: 'custom',
        renderComponent: TeamLinkComponent,
        compareFunction: Util.compareNames,
      },
    },
    actions: {
      add: true,
      edit: false,
      delete: true,
      position: 'right',
    },
    add: {
      addButtonContent: '<i class="fa fa-plus" data-toggle="tooltip" title="Add player" ></i>',
      createButtonContent: '<i class="fa fa-floppy-o" data-toggle="tooltip" title="Save new player" ></i>',
      cancelButtonContent: '<i class="fa fa-undo" data-toggle="tooltip" title="Cancel add" ></i>',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-times" style="color:red" data-toggle="tooltip" title="Delete player" ></i>',
      confirmDelete: true,
    },
    edit: {
      // editButtonContent: '<i class="fa fa-pencil" data-toggle="tooltip" title="Edit player details" ></i>',
      saveButtonContent: '<i class="fa fa-floppy-o" data-toggle="tooltip" title="Save changes" ></i>',
      cancelButtonContent: '<i class="fa fa-times" data-toggle="tooltip" title="Cancel edit" ></i>',
      confirmSave: true,
    }
  };

  errorMessage: string;

  

  constructor(private playerService: PlayerService) {
    this.players = new LocalDataSource();
  }

 
  ngOnInit() {
    this.playerService.getPlayers()
    .subscribe( players => this.players.load(players));
  }
 
  addPlayer(player: Player) {
    this.playerService.addPlayer(player);
    // this.reload();
   }
  updatePlayer(player: Player) {
    this.playerService.updatePlayer(player);
    // this.reload();
   }
  deletePlayer(player: Player) {
    this.playerService.deletePlayer(player);
    // this.reload();
   }

}
