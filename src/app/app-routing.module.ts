import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "buy/:filter", component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
