import { AfterViewInit, Component, input, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-sample', //selettore
  standalone: true,
  imports: [FormsModule, ChildComponent], //Import al componente
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent implements OnInit, AfterViewInit, OnDestroy{

  //proprietà del componente
  nome!:string;
  cognome!:string;

  //metodo costruttore: è lui ad istanziare il componente 
  constructor(){
    this.nome = "Giovanni";
    this.cognome = "Giorgio";
  }

  ngOnInit(): void {
    console.log("Componente inizializzato!")
  }
  ngAfterViewInit(): void {
    console.log("Render del componente terminato!")
  }
  ngOnDestroy(): void {
    throw new Error('Componente distrutto!');
  }

  stampaNome(){
    console.log(`Il nome da te scelto è ${this.nome} ${this.cognome}!`);
  }

  riassegna(cognome: any){
    this.cognome = cognome;
  }

}
