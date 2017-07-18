import { Component, OnInit, Input  } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { User } from '../user/user.model';
import { Team } from '../team/team.model';
import { UserService } from '../user/user.service';
import { TeamService } from '../team/team.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  user: User;
  errorMessage: string;
  team: Team;
  teams: Team[];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService,
    private teamService: TeamService) {
  }
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(
      user => {
        this.user = user;
        console.log(`getUser(${this.id})`);
        console.dir(this.user);
      },
      error => {
        this.errorMessage = error;
        console.error(`getUser(${this.id}) failed: ${error}`);
      });
    this.teamService.getTeams().subscribe(
      teams => this.teams = teams,
      error => {
        this.errorMessage = error;
        console.error(`getTeams() failed: ${error}`);
      });
  }

onCancel() {
  alert ("Cancelled");
  this.location.back();
}
onSubmit(userForm) {
  alert("Submitted");
  this.location.back();
}
}
