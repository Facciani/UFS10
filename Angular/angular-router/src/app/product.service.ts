import { Injectable } from '@angular/core';
import {Product} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prodotti = [
    new Product("1","Flessibile", "Forte"),
    new Product("2", "Martello", "Grande"),
    new Product("3", "Chiave Inglese", "Resistente"),
    new Product("4", "Pala", "Robusta"),
    new Product("5", "Cacciavite", "Sottile")
  ]
  constructor() { }

  getProductFromId(id: string){
    return this.prodotti.find((p)=>(p.id === id))
  }

  getLastId(){
    return (Number(this.prodotti[this.prodotti.length-1].id)+1).toString();
  }

  addProduct(product: Product){
    this.prodotti.push(product)
  }

  deleteFromId(id: string){
    return this.prodotti = this.prodotti.filter((v)=>v.id !== id)
  }
}
