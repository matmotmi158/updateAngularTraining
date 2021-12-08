import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }
  @Output("filter") selectedValue = new EventEmitter<String>()
  onSelect(event:any){
    this.selectedValue.emit('vai lz')
  }
}
