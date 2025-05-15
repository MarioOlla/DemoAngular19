import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SampleService } from '../../services/sample.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() cognome!: string;  //accoglie l'input della proprietà dal componente padre
  @Output() cognomeEmitter: EventEmitter<string> = new EventEmitter<string>(); //emette verso il componente padre

  totale: number = 0;
  operando?: number;

  constructor(readonly matshSvc: SampleService) { }

  cambia() {
    this.cognomeEmitter.emit(this.cognome);
  }

  add() {
    this.resolve(this.matshSvc.add(this.totale, this.operando));
  }

  subtract() {
    this.resolve(this.matshSvc.subtract(this.totale, this.operando));
  }

  multiply() {
    this.resolve(this.matshSvc.multiply(this.totale, this.operando));
  }

  divide() {
    this.resolve(this.matshSvc.divide(this.totale, this.operando));
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
