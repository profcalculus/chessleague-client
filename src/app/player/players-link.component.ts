import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table'

@Component({
  selector: 'players-link-component',
  template:
  `
  <div class="list-group" *ngFor="let link of value">
      <a class="list-group-item" [routerLink]="[url, link.id]">{{link.name}}</a>
  </div>`,
  styleUrls:
  ["../shared/shared-styles.css",],
})

export class PlayersLinkComponent implements ViewCell {
  url:string = '/players/';
  links: {
    id: number,
    name: string,
  }[];
  debugJson:string;

  @Input('links') value: any;
  @Input() rowData: any;

constructor() {

}

}
