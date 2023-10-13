import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'poke-accordion',
  templateUrl: './poke-accordion.component.html',
  styleUrls: ['./poke-accordion.component.css']
})
export class PokeAccordionComponent implements OnChanges {
  @Input() pokemon:any = null;
  iconSrc: string = 'https://p7.hiclipart.com/preview/321/301/314/poke-ball-pokemon-go-computer-icons-pokemon-go-thumbnail.jpg'
  expanded: boolean = false;
  jsonInfo: string = '';

  ngOnChanges() {
    this.jsonInfo = JSON.stringify(this.pokemon)
  }

  expand() {
    this.expanded = !this.expanded;
  }

}
