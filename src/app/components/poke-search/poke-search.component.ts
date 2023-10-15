import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent {
  searchStr: string = ''
  pokemons: any = [];
  loading: boolean = false;
  start: number = 0;
  limit: number = 2000; // TODO Break single api call into paginated api calls 
  @Output() pokemonsFound = new EventEmitter<any>();

  constructor(public apiService: ApiService) { }

  search(e:any) {
    if(!this.pokemons.length) this.fetchData()
    let searchStr:string = e.target.value; // [(ngModel not working)]
    // if(searchStr.length == 1) this.fetchData()
    if (searchStr.length < 3) {
      !searchStr.length && this.pokemonsFound.emit([]);  
      return;
    }
    let results = this.pokemons.filter( (pokemon: any) => (
      pokemon.name.includes(searchStr.toLowerCase()) || pokemon.url.split('/pokemon/')[1].split('/')[0] == searchStr
     ))
    if(results.length) this.pokemonsFound.emit(results);
    else this.pokemonsFound.emit([]);
  }
  
  fetchData() {
    this.loading = true;
    return this.apiService.getPokemon(this.limit, this.start).subscribe((data: any) => {
      this.loading = false;
      this.pokemons = [...this.pokemons, ...data.results];
      if(data.next) this.start += this.limit;
      else this.start = -1;
    })    
  }
  
  loadNext() {
    this.fetchData()
  }

}
