import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../module/Product";
import {ProductsService} from "../products.service";
import {interval, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, OnDestroy{

  private intervalSubscription?: Subscription
  public listProducts?: Product[]
  constructor(private prodottoService: ProductsService, private router: Router) {
  }

  goToDetail(id: number){
    this.router.navigate(["/products",id])
  }

  ngOnInit() {
    /*
    this.intervalSubscription = interval(1000).subscribe(count => {
      this.count = count
      console.log(count)
    })
    */

    this.intervalSubscription = this.prodottoService.observable?.subscribe({
      next: value => {
        this.listProducts = value
      }
      /*
      complete: () => {

        console.log("Finito")
      },
      */
      /*
      error: err => {
        console.log(err)
      }
      */

    })
  }

  ngOnDestroy() {
    this.intervalSubscription?.unsubscribe()
  }
}
