import { Component, OnInit } from '@angular/core';
import { NameLinkComponent } from '../shared/namelink/namelink.component';

@Component({
  templateUrl: '../shared/namelink/namelink.component.html',
})
export class TeamLinkComponent extends NameLinkComponent {
  constructor() {
  super('teams');
}

}
