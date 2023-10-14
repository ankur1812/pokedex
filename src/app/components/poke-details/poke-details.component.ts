import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent {
  @Input() pokemon:any = null;
}
