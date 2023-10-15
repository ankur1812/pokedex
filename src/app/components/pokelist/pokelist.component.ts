import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnChanges {
  @Input() offset: number = 0;
  @Input() limit: number = 151;
  @Input() foundPokemons: any = [];
  pokemons: any = [];
  loading: boolean = false;
  total: number = 0;
  containerRef: any = null;


  constructor(public apiService: ApiService) { }
  
  ngOnChanges() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.apiService.getPokemon(this.limit, this.offset).subscribe((data: any) => {
      this.loading = false;
      this.total = data.count;
      this.pokemons = [...data.results];
    })    
  }

  getLabel(pokemon: any) {
    return `#${pokemon.url.split('/pokemon/')[1].split('/')[0]} ${pokemon.name.toUpperCase()[0]}${pokemon.name.slice(1, pokemon.name.length)}`
  }
  
}
