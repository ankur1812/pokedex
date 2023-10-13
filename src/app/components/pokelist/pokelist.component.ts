import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  apiValue: any = -1;
  total: number = 0;


  constructor(public crudService: CrudService) { }

  
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    return this.crudService.getPokemon().subscribe((data: any) => {
      this.total = data.count;
      this.apiValue = data.results;
    })    
  }  
}
