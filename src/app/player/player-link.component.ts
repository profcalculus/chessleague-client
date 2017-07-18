import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-link',
  template: `<a [routerLink]="[link, id]">{{name}}</a>`
})
export class PlayerLinkComponent implements ViewCell, OnInit {
  @Input()  value: any;
  @Input() rowData: any;
  name: string;
  id: number;
  link = '/players/';

    ngOnInit() {
      this.name = this.rowData.name;
      this.id = +this.rowData.id;
    }

  }
