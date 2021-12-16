import {Product}from "./product.model"
export class Cart{
    public product:Product
    public qty:number
    constructor(product:Product,qty:number){
        this.product = product;
        this.qty = qty;
    }
}