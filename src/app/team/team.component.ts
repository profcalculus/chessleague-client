import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from './team.model';
import { TeamService } from './team.service';
import { PlayersLinkComponent } from '../player/players-link.component';
import { UsersLinkComponent } from '../user/users-link.component';

@Component({
  // selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['../shared/shared-styles.css']
})
export class TeamComponent implements OnInit {
  id: number;
  team: Team;
  debugJson:string;
  errorMessage: string;

  constructor(
    private route:  ActivatedRoute,
    private teamService: TeamService) { };

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.teamService.getTeam(this.id)
      .subscribe(
      team => {
        this.team = team;
      },
      error => {
        this.errorMessage = error;
        console.error('getTeam(' + this.id + ') failed: ' + error);
      });
  }
}
