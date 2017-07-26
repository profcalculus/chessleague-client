import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-players-link-component',
  template:
  `
  <div class="row" *ngFor="let link of value">
    <div class="col-md-12">
      <a class="list-group-item" [routerLink]="[url, link.id]">{{link.name}}</a>
    </div>
  </div>`
})

export class PlayersLinkComponent implements ViewCell {
  url = '/players/';
  @Input('links') value: any;
  @Input() rowData: any;
  get diagnostic() { return JSON.stringify(this); }

}
