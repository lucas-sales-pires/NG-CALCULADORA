import { Component } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-botaoif',
  templateUrl: './botaoif.component.html',
  styleUrl: './botaoif.component.css'
})
export class BotaoifComponent {
  constructor(private mostrar: EstadoService){

  }
  abrir(){
    this.mostrar.setMostrarSobreTrue();
  }
}
