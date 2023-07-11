import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Product} from "../module/Product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements  OnDestroy{

  public id: number
  public prodotto?: Product
  subscription?: Subscription
  httpSubscription?: Subscription

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const {id} = route.snapshot.params;
    this.id = id;
    this.fetchData(id)

    this.subscription = route.params.subscribe(params=>{
      const {id} = route.snapshot.params;
      this.id = id;

      this.fetchData(id)
    })
  }

  fetchData(id: number) {
    this.httpSubscription?.unsubscribe()
    this.httpSubscription = this.http.get<Product>(`https://dummyjson.com/products/${id}`)
      .subscribe(res => {
        this.prodotto = res;
        console.log("fetch")
      })
  }

  ngOnDestroy() {
    this.httpSubscription?.unsubscribe()
    console.log("Pagina distrutta")
  }
}
