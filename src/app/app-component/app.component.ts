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
  foundPokemons = [];

  setFoundPokemons(results: any) {
    this.foundPokemons = results;
  }
  updateIndices(info:any) {
    this.start = info.start;
    this.end = info.end;
  }
}
