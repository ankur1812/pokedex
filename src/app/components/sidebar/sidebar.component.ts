import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genNames: string [] = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  genOffsets: number[] =  [0, 151, 251, 386, 493, 649, 721, 809, 905]
  generations: any = []
  currentGenIndex: number = 0;
  @Output() genChange = new EventEmitter<string>();

  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.genOffsets.forEach ( (offset:number, i:number) => {
      let start = offset, end = this.genOffsets[i + 1] || 99999999, total= end - start;
      this.generations.push({start, end, total });
    })
  }
  
  switchGeneration(i: number) {
    this.currentGenIndex = i;
    let currentGen = this.generations[i];
    this.genChange.emit(currentGen);

  }
}
