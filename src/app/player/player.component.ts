import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
// import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player/player.model';
import { Team } from '../team/team.model';
import { PlayerService } from './player.service';
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
  submitMessage: string = 'Ready';
  team: Team;
  teams: Team[];

  constructor(
    // private location: Location,
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private teamService: TeamService) {
  }
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.player = this.playerService.getPlayer(this.id) as Player;
    this.teamService.getTeams().subscribe(
      teams => {
        this.teams = teams;
        console.log(`getTeams()`);
        console.dir(this.teams)
      },
      error => {
        this.errorMessage = error;
        console.error(`getTeams() failed: ${error}`);
      });
  }

  onCancel() {
    alert('Cancelled');
    // this.location.back();
  }
  onSubmit(form) {
    console.log('FORM: ' + JSON.stringify(form.value));
    let player: Player;
    this.teamService.getTeam(form.value.team_id)
    .subscribe(
      team => {
      player = new Player(
      this.player.id,
      form.value.first_name,
      form.value.last_name,
      form.value.dob,
      form.value.email,
      form.value.phone_1,
      form.value.phone_2,
      team);
      this.playerService.updatePlayer(player);
      this.player = player;
    });
    // alert('Submitted')
  }
  get diagnostic() {
    return JSON.stringify(this.player);
  }
}
