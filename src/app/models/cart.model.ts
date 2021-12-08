import {Product}from "./product.model"
export class Cart{
    public product:Product
    public qty:number
    public id?:number
    constructor(product:Product,qty:number,id?:number){
        this.product = product,
        this.qty = qty
        this.id = id
    }
}