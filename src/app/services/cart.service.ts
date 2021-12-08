import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService  {
  cartAPI : string = "http://localhost:3000/cart"

  constructor(private httpClient: HttpClient) { }
 
  addToCart(cart:Cart):Observable<Cart>{
    return this.httpClient.post<Cart>(this.cartAPI,cart);
  }
  getAllItem():Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(this.cartAPI)
  }
  removeItem(id:number):Observable<Cart>{
    return this.httpClient.delete<Cart>(`${this.cartAPI}/${id}`)
  }
  updateItem(id:number,cart:Cart):Observable<Cart>{
    return this.httpClient.put<Cart>(`${this.cartAPI}/${id}`,cart);
  }
}
