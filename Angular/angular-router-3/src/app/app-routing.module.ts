import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {myCanActivateLogin, myCanActivateProfile} from "./auth-guard.service";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "products",
    component: ProductsComponent
  },{
    path: "products/:id",
    component: ProductComponent
  },{
    path: "login",
    component: LoginComponent,
    canActivate:[myCanActivateLogin]
  },{
    path: "profile",
    component: ProfileComponent,
    canActivate:[myCanActivateProfile]
  },{
    path: "checkout",
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
