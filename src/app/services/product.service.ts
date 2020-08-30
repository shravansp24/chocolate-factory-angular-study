import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
    new Product(1, "Diary Milk", "milk", 40, "./../../assets/diary-milk.png"),
    new Product(2, "Kitkat", "milk", 25, "./../../assets/kitkat.png"),
    new Product(3, "Snicker", "milk", 25, "./../../assets/snickers.png"),
    new Product(4, "Bournville", "dark", 100, "./../../assets/bournville.png"),
    new Product(5, "Amul Dark", "dark", 150, "./../../assets/amul-dark-chocolate.png"),
    new Product(6, "Hersheys special dark", "dark", 200, "./../../assets/Hersheys-special-dark.png"),
    new Product(7, "Almond", "nut", 25, "./../../assets/almond.png"),
    new Product(8, "Pistachio", "nut", 25, "./../../assets/pistachio.png"),
    new Product(9, "Cashew", "nut", 25, "./../../assets/cashew.png"),
  ]

  constructor() { }

  getProducts(filterBy: string) : Product[]{
    if(filterBy=="all"){
    return this.products;
    }else{
      var filteredProducts: Product[] = [];
      for(let p of this.products){
        if(p.type==filterBy){
          filteredProducts.push(p);
        }
      }
      return filteredProducts;
    }
  }
  
}
