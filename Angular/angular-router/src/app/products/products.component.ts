import {Component, ElementRef, ViewChild} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList?: Product[];

  protected name: string = ""
  protected description: string = ""

  constructor(private productService: ProductService) {
    this.productList = this.productService.prodotti;
  }

  addProduct(){
    if(this.name !== "" && this.description !== ""){
      this.productService.addProduct(new Product(
        this.productService.getLastId().toString(),
        this.name,
        this.description)
      )
    }
  }

  deleteProduct(id: string){
    this.productList = this.productService.deleteFromId(id)
    console.log(this.productService.prodotti)
  }

  /*@ViewChild("mioInput") mioInput?:ElementRef;
  @ViewChild("mioInputH2") mioInputH2?:ElementRef;

  changeH2(element: HTMLHeadingElement) {
    console.log(element.textContent);
  }

  changeH2Input(element: HTMLInputElement) {
    console.log(element.value);
  }

  changeInputRefChild(){
    //leggi
    console.log(this.mioInput?.nativeElement.value)
    //scrivi
    this.mioInput!.nativeElement.value = "Change";
  }

  changeH2RefChild(){
    //leggi
    console.log(this.mioInputH2?.nativeElement.textContent)
    //scrivi
    this.mioInputH2!.nativeElement.textContent = "Change";
  }*/
}
