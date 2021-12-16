import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Account } from '../models/account.model';
import { Cart } from '../models/cart.model';
import { CartByUser } from '../models/cartbyuser';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  allAccount: Account[] = [
    new Account(0,"","","",[]),
    new Account(1,"admin","admin","admin",[]),
    new Account(2,"user","user","user",[]),
    new Account(3,"user1","user1","user",[])
  ]
  cartByUser:CartByUser[]=[]
  loginAccount$ = new BehaviorSubject(null) // hhan che dung undefined
  allAccount$ = new BehaviorSubject<Account[]>(this.allAccount)
  constructor() { }
  getAllAccount(){
    return this.allAccount$.getValue();
  }
  generateID(){
    const value = this.getAllAccount();
    const idArray = value.map(data=> data.id)
    let id = 0
    if(idArray.length>0){
    id = Math.max(...idArray);
    }
   return id+1;
  }
  createAccount(account:Account){
    const allAccount = this.getAllAccount();
    allAccount.push(account);
    this.allAccount$.next(allAccount);
  }
  getAllItemByUser(username:string){
    return this.allAccount$.pipe(map(data=>data.find(item=>item.username===username)))
  }
  getAccountByUserName(username:string){
    return this.getAllAccount().find(data=>data.username===username);
  }
  saveLoginAccount(account:any){
    this.loginAccount$.next(account);
  }
  getAccountLogin(){
    return this.loginAccount$.getValue();
  }
  logoutAccount(){
    this.loginAccount$.next("");
  }
  
  // addItemInUserCart(itemInUserCart:CartByUser){
  //   let item = item.push(itemInUserCart)
  //   this.cartByUser$.next(itemInUserCart);
  // }
  
  // addOrUpdateItem(username:string,product:Product,qty:number){
  //   const acc = this.getAccountByUserName(username);
  //   let allItem = this.getAllItemByUser();
  //     let checkAcc = allItem.find(data=>data.account.username=== acc.username)
  //     let checkProduct!:boolean
  //     if(checkAcc!== undefined){
  //     checkProduct = checkAcc.cart.product.id === product.id
  //     }
  //     if(checkProduct){
  //       checkAcc.cart.qty = Number(checkAcc.cart.qty) + Number(qty)
  //         const newItem =  new Cart(checkAcc.cart.product,checkAcc.cart.qty)
  //         const newItemInUserCart = new CartByUser(acc,newItem)
  //         this.updateItemInUserCart(newItemInUserCart)
  //     }
  //     if(!checkProduct){
  //       const newItem =  new Cart(product,qty)
  //         const newItemInUserCart = new CartByUser(acc,newItem)
  //       this.updateItemInUserCart(newItemInUserCart)
  //     }
  // }
}
