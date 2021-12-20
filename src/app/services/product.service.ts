import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product("Iphone 13 ProMax",200,"http://img.websosanh.vn/v2/users/root_product/images/dien-thoai-iphone-13-pro-max-/qcnxe7bboj1ag.jpg","Phone",1),
    new Product("SamSung Z Fold 2",100,"https://images.fpt.shop/unsafe/fit-in/filters:quality(90)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/samsung-galaxy-zfold2.jpg","Phone",2),
    new Product("Asus VivoBook",300,"https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/asus-vivobook-15-1515EP-5.jpg","Laptop",3),
    new Product("Acer Nitro5",500,"https://www.notebookcheck.net/uploads/tx_nbc2/AcerNitro5-AN515-55__1__07.JPG","Laptop",4),
    new Product("LG",400,"https://www.lg.com/vn/images/tivi/md07523342/gallery/D-01.jpg","Tivi",5),
    new Product("Panasonic",600,"https://cdn.tgdd.vn/Products/Images/1942/180080/panasonic-th-32fs500v-12-550x340.jpg","Tivi",6),
  ]
  products$ = new BehaviorSubject<Product[]>(this.products)
  constructor() { }
  displayAllProduct(){
    return [...this.products$.getValue()]
  }
  generateID(){
    const value = this.displayAllProduct();
    const idArray = value.map(data=> data.id)
    let id = 0
    if(idArray.length>0){
    id = Math.max(...idArray);
    }
   return id+1;
  }
  addNewProduct(newProduct:Product){
    const productTPM = this.displayAllProduct();
    productTPM.push(newProduct)
    this.products$.next(productTPM)
  }
  deleteItem(product:Product){
    if(confirm(`Bạn có muốn xóa ${product.name} không?`)){
    const listProduct = this.displayAllProduct();
    let index = listProduct.findIndex(data=>data.id === product.id)
    listProduct.splice(index,1)
    this.products$.next(listProduct);
  }
}
filterList(filterValue:string){
  return this.products$.pipe(map(data=>data.filter(item=> filterValue.toLowerCase()==="all" ? true :item.title === filterValue)))
}
}

