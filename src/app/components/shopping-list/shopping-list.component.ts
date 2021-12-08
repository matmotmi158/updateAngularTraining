import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy, OnChanges {
  listProduct!: Product[];
  subscription!: Subscription;
  subscriptionCheck !: Subscription
  subscriptionUpdate !: Subscription
  checkProduct!: Cart[]
  cartItem !: Cart
  constructor(private productService: ProductService, private cartService:CartService) {}
  
  ngOnInit(): void {
    this.getProduct()
  }
  ngOnChanges() {
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if(this.subscriptionCheck){
      this.subscriptionCheck.unsubscribe()
    }
    if(this.subscriptionUpdate){
      this.subscriptionUpdate.unsubscribe()
    }
  }
  getProduct() {
    this.subscription = this.productService
      .getAllProduct()
      .subscribe((data) => {
        this.listProduct = data;
      });
  }
  onAddCart(product:Product,qty:any){
    if(confirm(`Bạn muốn thêm ${product.name} vào giỏ hàng với số lượng là ${qty.value}? `)){
    this.subscriptionCheck = this.cartService.getAllItem().subscribe(data=>{
      let check = false
      this.checkProduct = data
      for(let i in this.checkProduct){
        if(this.checkProduct[i].product.id === product.id){
          this.checkProduct[i].qty = Number(this.checkProduct[i].qty) + Number(qty.value)
          this.cartItem = new Cart(this.checkProduct[i].product,this.checkProduct[i].qty)
          this.subscriptionUpdate = this.cartService.updateItem(Number(this.checkProduct[i].id),this.cartItem).subscribe()
          check = true
          break;
        }
      }
      if(!check){
        this.cartItem = new Cart(product,qty.value)
        this.subscription = this.cartService.addToCart(this.cartItem).subscribe()
        location.reload()
      }
      location.reload()
    })
    }
  }
}
