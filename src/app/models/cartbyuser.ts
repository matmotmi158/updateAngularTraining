import { Account } from "./account.model";
import { Cart } from "./cart.model";
export class CartByUser{
    public account:Account
    public idCart:number
    constructor(account:Account,idCart:number){
        this.account = account
        this.idCart = idCart
    }
}