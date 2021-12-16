import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnChanges {
  listProduct!: Product[];
  checkProduct!: Cart[]
  cartItem !: Cart
  subscription = new Subscription()
  @Input("filterValue") filterValue :string = "All";
  @Input("checkRole") isAdmin !: boolean;
  @Input("username") username !: string;
  constructor(private productService: ProductService, private cartService:CartService,private router:Router) {}
  ngOnInit(): void {
  }
  ngOnChanges() {
    this.subscription.add(this.productService.filterList(this.filterValue).subscribe(data=>{
      this.listProduct = data
    }))
}

  onAddCart(product:Product,qty:any,username:string){
    if(username){
      this.cartService.addOrUpdateItemWithAccount(username,product,qty.value);
    }else{
    if(confirm(`Bạn muốn thêm ${product.name} vào giỏ hàng thì phải đăng nhập trước `)){
      this.router.navigateByUrl('/login')
    }}
    qty.value = 1;
  }
  deleteItem(product:Product){
    this.productService.deleteItem(product);
  }
}
