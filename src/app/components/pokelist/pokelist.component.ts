import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  pokemons: any = [];
  loading: boolean = false;
  start: number = 0;
  limit: number = 25;
  total: number = 0;
  containerRef: any = null;


  constructor(public apiService: ApiService) { }

  
  ngOnInit() {
    this.fetchData();
    // setTimeout( () => {
    //   this.containerRef = document.getElementById('pokelist')
    //   this.containerRef.addEventListener('scroll', this.loadMoreOnScrollEnd)
    // }, 1000)
  }

  fetchData() {
    this.loading = true;
    return this.apiService.getPokemon(this.limit, this.start).subscribe((data: any) => {
      this.loading = false;
      this.total = data.count;
      this.pokemons = [...this.pokemons, ...data.results];
    })    
  }
  
  loadNext() {
    this.start += this.limit;
    this.fetchData()
  }

  // TODO: Implement AutoLoad
  // loadMoreOnScrollEnd(e:any) {  }

}
