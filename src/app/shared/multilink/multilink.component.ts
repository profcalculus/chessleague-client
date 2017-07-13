import { Component, OnInit, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table'
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: './multilink.component.html',
})

export class MultiLinkComponent implements ViewCell, OnInit {
  url:string;
  links: {name: string, id: number}[];
  @Input() value: any;
  @Input() rowData: any;

  constructor(feature: string) {
    this.url = `/${feature}/`;
  }


  ngOnInit() {
    this.links = this.value;
  }
}
