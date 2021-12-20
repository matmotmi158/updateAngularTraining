import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Account } from '../models/account.model';
import { Cart } from '../models/cart.model';
import { CartByUser } from '../models/cartbyuser';
import { Product } from '../models/product.model';
import { TransferService } from './transfer.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: Cart[] = [];
  cartByUserItem: CartByUser[] = [];
  constructor(private transferService: TransferService) {}
  cartItem$ = new BehaviorSubject<Cart[]>(this.cartItem);
  cartByUserItem$ = new BehaviorSubject<CartByUser[]>(this.cartByUserItem);

  deleteItem(username: string, id: number) {
    const allAccount = this.transferService.getAllAccount();
    const checkAcc = allAccount.find((data) => data.username === username);
    const index = checkAcc.cart.findIndex((data) => data.product.id === id);
    checkAcc.cart.splice(index, 1);
    this.transferService.allAccount$.next(allAccount);
  }
  updateQuantity(username: string, id: number, minusOrPlus: boolean) {
    const allAccount = this.transferService.getAllAccount();
    let checkAcc = allAccount.find((data) => data.username === username);
    let getItem = checkAcc.cart;
    let itemFound = getItem.find((data) => data.product.id === id);
    if (itemFound) {
      if (minusOrPlus) {
        itemFound.qty++;
      } else {
        if (itemFound.qty < 2) {
          if (
            confirm(
              `Bạn có muốn xóa sản phẩm ${itemFound.product.name} ra khỏi giỏ hàng không?`
            )
          ) {
            this.deleteItem(username, itemFound.product.id);
          }
        } else {
          itemFound.qty--;
        }
      }
    }
    this.transferService.allAccount$.next(allAccount);
  }
  addOrUpdateItemWithAccount(username: string, product: Product, qty: number) {
    let acc = this.transferService.getAllAccount();
    let checkAcc = acc.find((data) => data.username === username);
    if (checkAcc) {
      let item = checkAcc.cart.find((data) => data.product.id === product.id);
      if (item) {
        item.qty = Number(item.qty) + Number(qty);
      }
      if (!item) {
        const newItem = new Cart(product, qty);
        checkAcc.cart.push(newItem)
        acc.push(checkAcc);
        this.transferService.allAccount$.next(acc);
      }
    }
    
  }
  // addItemToCart(acc: Account, product: Product, qty: number) {
  //   const newItem = new Cart(product, qty);
  //   const getAcc = this.transferService.getAllAccount();
  //   let checkAcc = getAcc.find((data) => data.username === acc.username);
  //   checkAcc.cart.push(newItem);
  //   getAcc.push(checkAcc);
  //   this.transferService.allAccount$.next(getAcc);
  // }
  // addItemToCart(product: Product, qty: number) {
  //   const newItem = new Cart(product, qty);
  //   const itemInCart = this.getAllItemInCart();
  //   itemInCart.push(newItem);
  //   this.cartItem$.next(itemInCart);
  // }
  // getAllItemInCart() {
  //   return this.cartItem$.getValue();
  // }
  // getNumberOfItem() {
  //   return this.cartItem$.pipe(map(data=>data.length))
  // }
  // addOrUpdateItem(product:Product,qty:any){
  //   let allItem = this.getAllItemInCart();
  //     let item = allItem.find(data=>data.product.id=== product.id)
  //     if(item?.product.id === product.id){
  //       item.qty = Number(item.qty) + Number(qty.value)
  //         const newItem =  new Cart(item.product,item.qty)
  //         // this.updateItemInCart(newItem)
  //     }
  //     if(!item){
  //       // this.addItemToCart(product,qty.value)
  //     }
  // }
  // addItemToCartWithAccount(product: Product, qty: number){
  //   const newItem = new Cart(product, qty);
  //   const itemInCart = this.getAllItemInCart();
  //   itemInCart.push(newItem);
  //   this.cartItem$.next(itemInCart);
  // }
}
