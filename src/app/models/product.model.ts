export class Product{
    public id: number
    public name:string
    public price:number
    public link:string
    public title:string
    constructor(name:string,price:number,link:string,title:string,id:number){
        this.name= name
        this.price=price
        this.link=link
        this.title = title
        this.id = id
    }
}