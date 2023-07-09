import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
  public id?: number
  constructor(private route: ActivatedRoute) {
    const {id} = route.snapshot.params;
    this.id = id;
    console.log("construct", this.id)
  }

  ngOnInit() {
    console.log("onInit", this.id)
  }

  ngOnDestroy() {
    console.log("onDestroy", this.id)
  }
}
