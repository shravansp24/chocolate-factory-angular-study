import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orderPlaced(){
    alert("Order is placed!");
    window.localStorage.clear();
    window.location.href = "/home";
  }
}
