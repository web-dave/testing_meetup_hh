import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  validateInput(a: any, b: any) {
    return ((typeof (a) === 'number') && (typeof (b) === 'number'));
  }

  add(a: number, b: number) {
    return (this.validateInput(a, b)) ? a + b : 'invalid';
  }

  sub(a: number, b: number) {
    return a - b;
  }

  diff(a: number, b: number) {
    return a / b;
  }

  multi(a: number, b: number) {
    return a * b;
  }

}
