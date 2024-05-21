import { Component } from "@angular/core";

@Component( {
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(-1)" class="btn btn-sm btn-outline-primary" style="border-radius: 8px 1px 1px 8px">-1</button>
    <button (click)="resetCounter()" class="btn btn-sm btn-outline-primary" style="border-radius: 1px">Reset</button>
    <button (click)="increaseBy(1)" class="btn btn-sm btn-outline-primary" style="border-radius: 1px 8px 8px 1px">+1</button>
  `
} )
export class CounterComponent {
  counter :number = 1;

  increaseBy(value :number) :void {
    if (this.counter == 0 && value < 0) return
    this.counter += value
  }

  resetCounter() :void {
    this.counter = 1;
  }
}
