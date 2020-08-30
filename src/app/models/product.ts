export class Product {
    id: number;
    name: string;
    type: string;
    price: number;
    imgUrl : string;

    constructor(id: number, name: string, type: string, price: number, imgUrl : string){
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}
 