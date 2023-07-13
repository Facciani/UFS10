import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ProductsService} from "../products.service";
import {Product} from "../module/Product";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  public prodotti?: Product[]

  constructor(private prodottoService: ProductsService) {


    this.prodotti = this.prodottoService.getCart()

    /*const obs = Observable.create((observer: any)=>{

      observer.next(Math.random())
    })

    obs.subscribe((value: number) => {
      console.log("subscription A",value)
    })

    obs.subscribe((value: number) => {
      console.log("subscription B",value)
    })

    const subject = new Subject()



    subject.subscribe((value) => {
      console.log("subject A",value)
    })


    subject.subscribe((value) => {
      console.log("subject B",value)
    })


    subject.next(Math.random())*/

  }

  ngOnInit() {
    console.log(this.prodottoService.getTotalCart())
  }

}
