import {Directive, ElementRef, Renderer2, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[applicaColore]'
})
export class ApplicaColoreDirective implements OnInit{

  @Input() color?: string

  constructor(public render: Renderer2, public elementRer: ElementRef) {

  }

  ngOnInit() {
    this.render.setStyle(this.elementRer.nativeElement, "background-color", this.color)
  }
}
