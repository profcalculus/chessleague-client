import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-name-link',
  templateUrl: './namelink.component.html',
})
export class NameLinkComponent implements ViewCell, OnInit {
  name: string;
  id: number;
  url: string;
  @Input()  value: any;
  @Input() rowData: any;

  constructor(feature: string) {
    this.url = `/${feature}/`;
  }

  ngOnInit() {
    this.name = this.value.name;
    this.id = +this.value.id;
  }

}
