import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = "Hello World"
  num: number = 0
  disabled: boolean = false
  idCounter: number = 3
  names: any = [
    {
      id: 1,
      name: 'Pippo'
    },
    {
      id: 2,
      name: 'Pluto'
    }, {
      id: 3,
      name: 'Paperino'
    }
  ]

  increment(): void {
    if (this.num >= 10) {
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
        this.num = 0
      }, 2000)
    }
    this.num++
  }

  changeText(event: Event): void {
    const inputRef = event.target as HTMLInputElement
      this.text = inputRef.value
  }

  addName(): void {
    this.idCounter++;
    this.names = [...this.names, {id: this.idCounter, name: this.text}]
    this.text = ""
  }

  deleteName(id: number): void {
    this.names = this.names.filter((person:any) => person.id !== id)
  }

  protected readonly JSON = JSON;
}
