import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  start = 0;
  end = 151;

  updateIndices(info:any) {
    this.start = info.start;
    this.end = info.end;
  }
}
