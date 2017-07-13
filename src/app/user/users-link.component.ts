import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table'

@Component({
  selector: "users-link-component",
  template:
  `
  <div class="list-group" *ngFor="let link of value">
      <a class="list-group-item" [routerLink]="[url, link.id]">{{link.name}}</a>
  </div>
  `,
  styleUrls:['../shared/shared-styles.css']
})
export class UsersLinkComponent implements ViewCell {
  url:string = '/users/';
  links: {
    id: number,
    name: string,
  }[];

  @Input('links') value: any;
  @Input() rowData: any;

}
