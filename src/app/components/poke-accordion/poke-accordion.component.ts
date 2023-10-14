import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'poke-accordion',
  templateUrl: './poke-accordion.component.html',
  styleUrls: ['./poke-accordion.component.css']
})
export class PokeAccordionComponent{
  @Input() pokemon:any = null;
  id: string = '';
  iconSrc: string = 'https://p7.hiclipart.com/preview/321/301/314/poke-ball-pokemon-go-computer-icons-pokemon-go-thumbnail.jpg'
  expanded: boolean = false;
  jsonInfo: string = '';
  details: any = null;
  // loading: boolean = false;

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.id = this.pokemon.url.split('/pokemon/')[1].split('/')[0];
  }
  expand() {
    this.expanded = !this.expanded;
    // this.loading = true;
    return this.apiService.getMoreDtails(this.pokemon.url).subscribe((data: any) => {
      // this.loading = false;
      this.details = data;
    })    

  }

}
