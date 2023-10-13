import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  pokemons: any = -1;
  total: number = 0;


  constructor(public apiService: ApiService) { }

  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    return this.apiService.getPokemon(25).subscribe((data: any) => {
      this.total = data.count;
      this.pokemons = data.results;
    })    
  }  
}
