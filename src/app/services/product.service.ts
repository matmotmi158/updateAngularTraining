import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productAPI : string = "http://localhost:3000/items"
  constructor(private httpClient: HttpClient) { }
  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productAPI)
  }
}
