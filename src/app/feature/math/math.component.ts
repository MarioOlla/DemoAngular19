import { Component } from '@angular/core';
import { SampleService } from '../../services/sample.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent {

  totale: number = 0;
  operando?: number;

  constructor(readonly mathSvc: SampleService){

  }

  add() {
    this.resolve(this.mathSvc.add(this.totale, this.operando));
  }

  subtract() {
    this.resolve(this.mathSvc.subtract(this.totale, this.operando));
  }

  multiply() {
    this.resolve(this.mathSvc.multiply(this.totale, this.operando));
  }

  divide() {
    this.resolve(this.mathSvc.divide(this.totale, this.operando));
  }

  clear(){
    this.totale = 0;
    this.operando = undefined;
  }

  resolve(result: number | string) {
    if (typeof (result) === 'number') {
      this.totale = result;
      this.operando = undefined;
    } else {
      console.error(result);
    }
  }
}
