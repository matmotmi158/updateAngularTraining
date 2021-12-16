import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { TransferService } from 'src/app/services/transfer.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,OnDestroy {
  numberOfItem1!:number
  numberOfItemUser!:number
  subscription!:Subscription
  filterValue : string = "all"
  checkBoolean : boolean = true;
  checkLogin : boolean = true;
  checkRole : boolean = true;
  username : string = '';
  loginUser : any = [];
  itemInCart!:Cart[]
  totalMoney !: number
  constructor(private cartService:CartService, private transferService:TransferService,private router:Router){}
  ngOnInit(){
    this.getLogin();
    this.subscription.add(this.transferService.getAllItemByUser(this.username).subscribe(data=>{this.numberOfItem1 = data?.cart.length;
      this.itemInCart = data.cart;
      this.totalMoney = this.itemInCart.reduce((x, item) => x + (item.qty * item.product.price), 0);}))
  }
  ngOnDestroy(): void {
      if(this.subscription){
        this.subscription.unsubscribe()
      }
  }
  getLogin(){
    this.subscription = this.transferService.loginAccount$.subscribe(data=>this.loginUser=data)
    if(this.loginUser){
      this.checkLogin = false;
      this.username = this.loginUser[0]['username']
      if(this.loginUser[0]['roles'] === 'admin'){
        this.checkRole = false;
      }else{
        this.checkRole = true;
      }
    }else{
      this.checkLogin = true;
    }
    
}
  onLogout(){
    this.transferService.logoutAccount();
    this.router.navigate(['login']);
  }
  selectCategory(value:string){
    this.filterValue = value;
    this.checkBoolean = true;
  }
  toCart(){
    this.checkBoolean = false
  }
  updateMoney(){
    this.totalMoney = 0;
    let cartLength = this.itemInCart.length
    if(cartLength > 0){
      this.itemInCart.filter((item)=>{
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
