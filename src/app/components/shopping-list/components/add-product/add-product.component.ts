import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formNewProduct !: FormGroup
  constructor(private formBuilderService: FormBuilder, private productService:ProductService) { }
  @Output("closeForm") closeForm = new EventEmitter<boolean>()
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.formNewProduct = this.formBuilderService.group({
      name:[''],
      price:[''],
      link:[''],
      title:['']
    })
  }
  checkAdd(){
    if(confirm("Bạn có muốn thêm sản phẩm này chứ?")){
    const rawValue = this.formNewProduct.getRawValue();
    let id = this.productService.generateID();
    const newProduct = new Product(
      rawValue.name,
      parseInt(rawValue.price),
      rawValue.link,
      rawValue.title,
      id
    )
    this.productService.addNewProduct(newProduct);
    }
  }
  onCloseProduct(){
    this.closeForm.emit(false)
  }
}
