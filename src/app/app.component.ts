import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Chessleague app component';
  loadedFeature = 'players';

  onNavigate(event, feature) {
    this.loadedFeature = feature;
    console.log('Loaded feature = ' + feature);
  }
}
