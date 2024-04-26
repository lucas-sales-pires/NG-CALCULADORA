import { Component, effect } from "@angular/core";
import { EstadoService } from "src/app/services/estado/estado.service";

@Component({
  selector: "app-botaoif",
  templateUrl: "./botaoif.component.html",
  styleUrl: "./botaoif.component.css",
})
export class BotaoifComponent {
  condicao: any;
  constructor(private mostrar: EstadoService) {
    effect(() => {
      if (!this.mostrar.getMostrarSobre()) {
        this.condicao = "Abrir";
      } else {
        this.condicao = "Fechar";
      }
    });
  }
  abrir() {
    this.mostrar.setMostrarSobre();
  }
}
