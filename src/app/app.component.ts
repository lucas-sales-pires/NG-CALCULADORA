import { Component, effect} from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { EstadoService } from './services/estado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public titulo:string = "Angular Calculadora";
  mostrarSobre:any;
 

  constructor(mostrar: EstadoService) {
    setTheme('bs4');
    effect(()=>{
      mostrar.getMostrarSobre();
      this.mostrarSobre = mostrar.getMostrarSobre();
    })

  }

}

