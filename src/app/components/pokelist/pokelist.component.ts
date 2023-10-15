import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnChanges {
  @Input() start: number = 0;
  @Input() end: number = 151;
  @Input() foundPokemons: any = [];
  pokemons: any = [];
  loading: boolean = false;
  total: number = 0;
  startIndex: number = 0;
  pageSize = 25;


  constructor(public apiService: ApiService) { }
  
  ngOnChanges(change: SimpleChanges) {
    if(change['start']) {
      this.startIndex = this.start;
      this.pokemons = [];
      this.fetchData(this.pageSize, this.startIndex)
    };
  }

  fetchData(limit:number, start:number) {
    this.loading = true;
    this.apiService.getPokemon(limit, start).subscribe((data: any) => {
      this.loading = false;
      this.total = data.count;
      this.pokemons = [...this.pokemons, ...data.results];
    })    
  }

  
  getLabel(pokemon: any) {
    return `#${pokemon.url.split('/pokemon/')[1].split('/')[0]} ${pokemon.name.toUpperCase()[0]}${pokemon.name.slice(1, pokemon.name.length)}`
  }
  
  loadMore() {
    this.startIndex += this.pageSize;
    if (this.startIndex + this.pageSize >= this.end - this.start ) {
      this.fetchData(this.end - this.startIndex, this.startIndex);
    }
    else this.fetchData(this.pageSize, this.startIndex);
  }
}
