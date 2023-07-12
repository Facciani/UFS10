import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input("count") count?: number
  @Input("title") title?: string

  @Output() dalPadre = new EventEmitter<number>()

  passaAlPadre(){
    this.dalPadre.emit(this.count)
  }
}
