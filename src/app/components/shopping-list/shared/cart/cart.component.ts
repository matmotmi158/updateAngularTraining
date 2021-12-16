import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy,OnChanges {
  @Input("username") username !: string;
  totalMoney = 0;
  allItem!:Cart[]
  subscription = new Subscription();
  constructor(private cartService:CartService,private transferService:TransferService) {}
  ngOnInit(): void {

    this.subscription.add(this.transferService.getAllItemByUser(this.username).subscribe(data=>{
      this.allItem = data.cart;
      this.totalMoney = this.allItem.reduce((x, item) => x + (item.qty * item.product.price), 0);}))
  
  }
  ngOnChanges(){
   
  }
  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  removeItem(username:string,id:number){
    if(confirm("Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không?")){
    this.cartService.deleteItem(username,id);
    this.updateMoney();
    }
  }
  updateMoney(){
    this.totalMoney = 0;
    let cartLength = this.allItem.length
    if(cartLength > 0){
      this.allItem.filter((item)=>{
        this.totalMoney += (item.product.price * item.qty)
      })
    }else{
      this.totalMoney = 0;
    }
  }
  onChangeValue(username:string,idProduct:number,maBoolean:boolean){
    this.cartService.updateQuantity(username,idProduct,maBoolean);
    this.updateMoney();
  }
}
