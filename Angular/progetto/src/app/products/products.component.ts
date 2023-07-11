import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  prodotti? : Product[]

  constructor(private productService:ProductService){
    this.prodotti=productService.products
  }
}
