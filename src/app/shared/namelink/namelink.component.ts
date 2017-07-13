import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table'
import { environment } from '../../../environments/environment';
@Component({
  selector: 'namelink',
  templateUrl: './namelink.component.html',
})
export class NameLinkComponent implements ViewCell, OnInit {
  name: string;
  id: number;
  link: string;

  constructor(feature: string) {
    this.link =`/${feature}/`;
  }
  @Input()  value: any;
  @Input() rowData: any;

  ngOnInit() {
    this.name = this.value.name;
    this.id = +this.value.id;
  }

}
