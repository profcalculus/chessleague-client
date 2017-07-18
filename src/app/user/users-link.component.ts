import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-users-link-component',
  template:
  `
  <div class="list-group" *ngFor="let link of value">
      <a class="list-group-item" [routerLink]="[url, link.id]">{{link.name}}</a>
  </div>
  `
})
export class UsersLinkComponent implements OnInit, ViewCell {
  url = '/users/';
  // links: {
  //   id: number,
  //   name: string,
  // }[];

  @Input('links') value: any;
  @Input() rowData: any;
  ngOnInit() {
    // this.links = this.value;
  }
}
