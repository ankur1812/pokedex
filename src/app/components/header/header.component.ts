import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() pokemonsFound = new EventEmitter<any>();


  sendResults(e:any) {
    this.pokemonsFound.emit(e);
  }
}
