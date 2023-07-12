import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number
  stato: boolean

  constructor() {
    this.count = 0
    this.stato = false
  }

  fromChild(count: number){
    alert("Valore passato dal figlo " + count)
  }

  inc(){
    this.count++

    if(this.count >= 10){
      this.stato = true

      setTimeout(()=>{
        this.stato = false
        this.count = 0
      },3000)
    }
  }
}
