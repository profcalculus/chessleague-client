import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PlayersLinkComponent } from '../player/players-link.component';
import { UsersLinkComponent } from '../user/users-link.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: LocalDataSource;
  errorMessage: string;

  settings = {
    columns: {
      user_name: {
        title: 'UserName'
      },
      players: {
        title: 'Players',
        type: 'custom',
        renderComponent: PlayersLinkComponent,
      },
      contacts: {
        title: 'Contacts',
        type: 'custom',
        renderComponent: UsersLinkComponent,
      },
    }
  };



  constructor() { }

  ngOnInit() {
  }

}
