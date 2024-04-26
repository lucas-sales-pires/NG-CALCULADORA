import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public mostrarSobre = signal(false);


  constructor() { }
  setMostrarSobre() {
    this.mostrarSobre.set(!this.mostrarSobre()); // Alternar o valor de mostrarSobre
  }

  getMostrarSobre(){
    return this.mostrarSobre();
  }
  

}
