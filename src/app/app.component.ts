import { Component, effect} from '@angular/core';
import { EstadoService } from './services/estado/estado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public  mostrarSobre:any;
 

  constructor(mostrar: EstadoService) {
    
    effect(()=>{
      this.mostrarSobre = mostrar.mostrarSobre();
    })

  }

}

