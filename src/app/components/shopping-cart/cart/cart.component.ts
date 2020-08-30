import { Product } from 'src/app/models/product';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;

  constructor(private messengerService: MessengerService) { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("cart"))){
        this.cartItems = JSON.parse(localStorage.getItem("cart"));
        this.cartTotal = JSON.parse(localStorage.getItem("cartTotal"));
    }
    this.messengerService.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
    this.messengerService.getMessageRemove().subscribe((product: Product) => {
      this.removeProductFromCart(product);
    });
  }

  addProductToCart(product: Product){
    this.cartTotal = 0;
    var ifPushed = 0;
    for(let i in this.cartItems){
      if(this.cartItems[i].productId==product.id){
        this.cartItems[i].productQuantity++;
        ifPushed=1;
      }
    }
    if(ifPushed==0){
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productQuantity: 1
    });
    }

    this.cartItems.forEach(item => {
      this.cartTotal+=item.productQuantity*item.productPrice;
    })
    console.log(localStorage.getItem("cart"));
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    localStorage.setItem("cartTotal", JSON.stringify(this.cartTotal));
  }

  removeProductFromCart(product: Product){
    var ifRemoved = 0;
      for(let p=0; p<this.cartItems.length; p++){
        if(this.cartItems[p].productId as number==product.id){
          this.cartItems.splice(p, 1);
          ifRemoved=1;
          localStorage.setItem("cart", JSON.stringify(this.cartItems));
          this.cartTotal=0;
          this.cartItems.forEach(item => {
            this.cartTotal+=item.productQuantity*item.productPrice;
          })
          localStorage.setItem("cartTotal", JSON.stringify(this.cartTotal));
        }
      }
    if(ifRemoved==1){
      alert("Item removed from cart!");
    }else{
      alert("Item not present in cart!");
    }
  }

  clearCart(){
    window.localStorage.clear();
    window.location.href = "/buy/all";
  }
}
