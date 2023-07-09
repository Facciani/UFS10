import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id?: number;
  @Input() name?: string;
  @Input() desc?: string;
  @Input() img?: string;

  constructor() {
    
  }

}
