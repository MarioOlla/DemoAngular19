import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private readonly OND = "Errore: operando non definito.";

  constructor() { }

  add(a:number, b:number | undefined){
    return b != undefined ? a+b : this.OND;
  }

  subtract(a:number, b:number | undefined){
    return b != undefined ? a-b : this.OND;
  }

  multiply(a:number, b:number | undefined){
    return b != undefined ? a*b : this.OND;
  }

  divide(a:number, b:number | undefined){
    return b != undefined ? (b == 0 ? 'Errore: tentativo di divisione per 0.' : a/b) : this.OND;
  }
}
