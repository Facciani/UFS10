import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-4-b-Router';

  @ViewChild("testo2") mioInput?:ElementRef

  cliccato(input : HTMLInputElement){  // passo il parametro come HTMLInputElement
    alert(input.value)                 // input.value accede al valore
  }

  cliccato2(){  // passo il parametro come HTMLInputElement
    alert(this.mioInput?.nativeElement.value)                 // input.value accede al valore
  } 
  
}
