import { Cart } from "./cart.model"

export class Account{
    public id:number
    public username:string
    public password:string
    public roles:string
    public cart:Cart[]
    constructor(id:number,username:string,password:string,roles:string,cart:Cart[]){
        this.id = id
        this.username = username
        this.password = password
        this.roles = roles
        this.cart = cart
    }
}