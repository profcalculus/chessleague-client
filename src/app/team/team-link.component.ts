import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-link',
  template: `<a [routerLink]="[link, id]">{{name}}</a>`
})
export class TeamLinkComponent implements ViewCell, OnInit {
  @Input()  value: any;
  @Input() rowData: any;
  name: string;
  id: number;
  link = '/teams/';

    ngOnInit() {
      this.name = this.value.name;
      this.id = +this.value.id;
    }

  }
