import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './models/product.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnChanges {
  valueFilter!:string
  getData!:Product
  getProductQty !: number
  numberOfItem!:number
  subscription!:Subscription
  constructor(private cartService:CartService){}
  ngOnInit(){
    this.getTotalItem();
  }
  ngOnChanges(){
    this.getTotalItem();
  }
  ngAfterViewInit(){
    this.getTotalItem();
  }
  getTotalItem(){
    this.subscription = this.cartService.getAllItem().subscribe(data=>{
      if(data === undefined) {return}
      this.numberOfItem = data.length
    })
  }
}
