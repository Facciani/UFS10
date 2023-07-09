import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() title:string = "box title"
  @Input() id:number = 0
  @Output() deleteEvent = new EventEmitter<number>()

  deleteFromBox(){
    this.deleteEvent.emit(this.id)
  }
}
