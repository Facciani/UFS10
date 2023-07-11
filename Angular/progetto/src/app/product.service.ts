import { Injectable } from '@angular/core';
import { Product } from './models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products=[
    new Product("001","pera","buonissima pera","https://i.dummyjson.com/data/products/9/1.jpg"),
    new Product("002","mela","mela buonissimissima","https://i.dummyjson.com/data/products/9/2.png"),
    new Product("004","asdrubale","un piccolo asdrubale","https://i.dummyjson.com/data/products/9/3.png"),
    new Product("005","nespola","ensomma","https://i.dummyjson.com/data/products/9/4.jpg")
]
  constructor() { }

  addToCart(){

  }

  removeFromCart(){

  }

  getCartItems(){

  }

  getProductFromId(id:string){
    return this.products.find((p)=>{
      p.id===id
    })
  }
}
