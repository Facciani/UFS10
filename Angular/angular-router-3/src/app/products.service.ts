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

  getProductById(id: number){
    console.log(id, this.products)
    return this.products?.find((obj) => {
      return obj.id === id;
    });
  }
}
