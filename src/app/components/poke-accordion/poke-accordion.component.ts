import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-accordion',
  templateUrl: './poke-accordion.component.html',
  styleUrls: ['./poke-accordion.component.css']
})
export class PokeAccordionComponent{
  @Input() label:string = '';
  // iconSrc: string = 'https://p7.hiclipart.com/preview/321/301/314/poke-ball-pokemon-go-computer-icons-pokemon-go-thumbnail.jpg'
  iconSrc: string = 'https://cdn.iconscout.com/icon/free/png-256/free-pokemon-pokeball-game-go-34722.png'
  expanded: boolean = false;

  constructor() { }

  expand() {
    this.expanded = !this.expanded;
  }
}
