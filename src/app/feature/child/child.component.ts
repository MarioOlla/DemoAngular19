import { Component, EventEmitter, Input,   Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  cambia(){
    this.cognomeEmitter.emit(this.cognome);
  }
}
