import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        ProductsComponent,
        LoginComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
  exports: [
    LoginComponent,
    ProfileComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
