import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  subject = new Subject()
  constructor() { }

  sendData(product:Product,qty:number){
    console.log(product)
    console.log(qty)
    this.subject.next(product);
    this.subject.next(qty);
  }
  getData(){
    return this.subject.asObservable();
  }
}
