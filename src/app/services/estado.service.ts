import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public mostrarSobre = signal(false);


  constructor() { }
  setMostrarSobre(){
    if(this.mostrarSobre() == false){
      this.mostrarSobre.set(true);
    }
    this.mostrarSobre.set(false);
  }
  getMostrarSobre(){
    return this.mostrarSobre();
  }
  

}
