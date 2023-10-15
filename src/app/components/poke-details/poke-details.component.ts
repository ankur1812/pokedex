import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  @Input() data:any = null;
  pokemon: any = null;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMoreDtails(this.data.url).subscribe((data: any) => {
      this.pokemon = data;
    })    
  }

}
