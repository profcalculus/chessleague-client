import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from './team.service';
import { LocalDataSource } from 'ng2-smart-table';
import { PlayersLinkComponent } from '../player/players-link.component';
import { UsersLinkComponent } from '../user/users-link.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: LocalDataSource;
  errorMessage: string;

  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      players: {
        title: 'Players',
        type: 'custom',
        renderComponent: PlayersLinkComponent,
        sort: false,
      },
      contacts: {
        title: 'Contacts',
        type: 'custom',
        renderComponent: UsersLinkComponent,
        sort: false,
      },
    }
  };



  constructor(private teamService: TeamService) {
    this.teams = new LocalDataSource();
  }


  ngOnInit() {
    this.getTeams();
  }
  getTeams() {
    this.teamService.getTeams()
      .subscribe(
      teams => {
        this.teams.load(teams);
         console.log('TEAMS');
         console.dir(this.teams);
         console.log('/TEAMS'); },
      error => this.errorMessage = error);
  }

  addTeam(jsonObj: any) {
    const team = jsonObj as Team;
    this.teamService.addTeam(team);
  }

}
