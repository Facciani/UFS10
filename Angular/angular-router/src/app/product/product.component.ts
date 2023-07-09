import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public prodotto?: Product
  constructor(private route:ActivatedRoute, private productService: ProductService) {
    console.log(this.route.snapshot.params)
    const {id} = this.route.snapshot.params;
    this.prodotto = productService.getProductFromId(id)
  }



}
