import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public mostrarSobre = signal(false);


  constructor() { }
  setMostrarSobreTrue(){
    this.mostrarSobre.set(true);
  }
  
}
