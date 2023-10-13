import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  apiValue: any = -1;
  total: number = 0;


  constructor(public apiService: ApiService) { }

  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    return this.apiService.getPokemon().subscribe((data: any) => {
      this.total = data.count;
      this.apiValue = data.results;
    })    
  }  
}
