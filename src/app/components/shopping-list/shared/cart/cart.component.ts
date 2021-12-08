import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  
  @Input('getData') getData!: Product;
  @Input('getProductQty')getProductQty!: number
  totalMoney = 0;
  cartItem: any[] = [];
  count: number = 0;
  subscription !: Subscription
  itemDetail!:Cart[]
  allItem!:Cart[]
  constructor(private cartService:CartService) {}
  ngOnInit(): void {
    this.getAllItem();
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  getAllItem(){
    this.subscription = this.cartService.getAllItem().subscribe(data=>{
      if(data===undefined){return}
      this.allItem = data
      this.totalMoney = 0
    this.allItem.forEach((item) => {
      this.totalMoney +=(item.product.price * item.qty);
    });
    })
  }
  removeItem(id:any){
    if(confirm("Bạn có muốn xóa không?")){
    this.subscription = this.cartService.removeItem(parseInt(id)).subscribe()
    location.reload()
    }
  }
 
  // addProductToCart() {
  //   this.subscription = this.cartService.getAllItem().subscribe(data=>{
  //     let checkProduct = false;
  //     for(let i in this.itemDetail){
  //       console.log(this.allItem)
  //       console.log(data[i].product.id)
  //       if(this.itemDetail[i].product.id === data[i].product.id){}
  //     }
  //   });
  //   let checkProduct = false;
  //   for (let i in this.cartItem) {
  //     if (this.cartItem[i].id === this.getData.id) {
  //       this.cartItem[i].qty= Number( this.cartItem[i].qty)+Number(this.getProductQty);
  //       checkProduct = true;
  //       break;
  //     }
  //   }
  //   if (!checkProduct) {
  //     this.cartItem.push({
  //       qty: this.getProductQty,
  //       ...this.getData
        
  //     });
  //   }
  //   this.totalMoney = 0
  //   this.cartItem.forEach((item) => {
  //     this.totalMoney +=(item.price * item.qty);
  //   });
  // }
}
