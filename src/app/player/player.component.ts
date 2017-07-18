import { Component, OnInit, Input  } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player/player.model';
import { Team } from '../team/team.model';
import { PlayerService } from '../player/player.service';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  id: number;
  player: Player;
  errorMessage: string;
  team: Team;
  teams: Team[];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService) {
  }
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.playerService.getPlayer(this.id).subscribe(
      player => {
        this.player = player;
        console.log(`getPlayer(${this.id})`);
        console.dir(this.player);
      },
      error => {
        this.errorMessage = error;
        console.error(`getPlayer(${this.id}) failed: ${error}`);
      });
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams,
      error => {
        this.errorMessage = error;
        console.error(`getTeams() failed: ${error}`);
      });
  }

onCancel() {
  alert ('Cancelled');
  this.location.back();
}
onSubmit(playerForm) {
  alert('Submitted');
  this.location.back();
}
}
