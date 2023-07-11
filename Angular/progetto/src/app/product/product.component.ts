import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

    product?:Product

  constructor(private route:ActivatedRoute,private productService:ProductService){
    console.log(route.snapshot.params['id'])    
    this.product=productService.getProductFromId(route.snapshot.params['id'])
    
    
  }









}
