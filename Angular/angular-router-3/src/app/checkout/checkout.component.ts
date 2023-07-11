import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {


  constructor() {
    const obs = Observable.create((observer: any)=>{
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


    subject.next(Math.random())

  }

}
