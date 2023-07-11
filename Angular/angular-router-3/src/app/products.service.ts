import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductsRoot} from "./module/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public observable: Observable<Product[]>
  private products?: Product[]

  fetchData(){
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => this.products = json.products)
  }

  constructor() {
    this.observable = new Observable(subscriber => {

      if(!!this.products?.length){
        subscriber.next(this.products)
        console.log("cache",this.products)
      }else{
        fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(json => {
            this.products = json.products
            subscriber.next(this.products)
            console.log("fetch",this.products)
          })
      }
    })
  }
}
