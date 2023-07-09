import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnDestroy{

  @Input() titolo?: string

  constructor() {
    console.log("Costruttore ", this.titolo)
  }

  ngOnInit() {
    console.log("OnInit")
  }

  ngOnDestroy() {
    console.log("OnDestroy")
  }
}
