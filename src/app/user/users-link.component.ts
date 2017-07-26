import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-users-link-component',
  template:
  `
  <div class="row" *ngFor="let link of value">
    <div class="col-md-12">
      <a class="list-group-item" [routerLink]="[url, link.id]">{{link.name}}</a>
    </div>
  </div>`
})

export class UsersLinkComponent implements ViewCell {
  url = '/users/';
  @Input('links') value: any;
  @Input() rowData: any;
  get diagnostic() { return JSON.stringify(this); }

}
