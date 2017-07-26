import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  currentUser: string = null;
  feature: string = 'players';

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.feature = feature;
    this.featureSelected.emit(feature);
    console.log('feature='+feature);
  }
  onLogin() {
    this.currentUser = 'dummy';
  }
  onLogout() {
    this.currentUser = null;
  }
}
