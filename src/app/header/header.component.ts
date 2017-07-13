import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  currentUser: string = null;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(event, feature: string) {
    this.featureSelected.emit(feature);
  }
  onLogin() {
    this.currentUser = 'dummy';
  }
  onLogout() {
    this.currentUser = null;
  }
}
