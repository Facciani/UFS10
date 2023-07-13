import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductsRoot} from "./module/Product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  public observable: Observable<Product[]>
  private products?: Product[]
  private cart?: Product[] = []

  constructor(private http: HttpClient) {
    this.observable = new Observable(subscriber => {

      if(!!this.products?.length){
        subscriber.next(this.products)
        console.log("cache",this.products)
      }else{
        this.http.get<any>(`https://dummyjson.com/products`)
          .subscribe(res => {
            this.products = res.products;
            subscriber.next(this.products)
            console.log("fetch")
          })
      }
    })
  }

  getProductById(idF: number){
    return this.products?.find(el => {
      return el.id == idF
    })
  }

  getTotalCart(){
    let sum = 0;

    this.cart?.forEach(item => {
      sum += item.price;
    });

    return sum
  }

  addToCart(idF: number){
    const product = this.products?.find(el => {
      return el.id == idF
    })

    console.log(product)

    this.cart?.push(product!)

    console.log(this.cart)
  }

  getCart(){
    return this.cart
  }
}
