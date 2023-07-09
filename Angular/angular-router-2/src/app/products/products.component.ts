import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  data: any

  ngOnInit() {
    this.fetchData()
  }

  fetchData(){
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => this.data = json.products)
  }
}
