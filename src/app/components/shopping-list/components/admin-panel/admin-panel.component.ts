import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  checkActive = false;
  constructor() { }

  ngOnInit(): void {
  }
  activeFormAdd(){
    this.checkActive = !this.checkActive
  }
  onCloseForm(value:boolean){
    this.checkActive = value;
  }
} 
