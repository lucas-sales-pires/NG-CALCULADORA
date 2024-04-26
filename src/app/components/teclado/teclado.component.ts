import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../../services/validar/validacao.service';


@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultadoAtual:string = '';

  constructor(private validacao:ValidacaoService) { 
  }

  ngOnInit(): void {
  }

  resultado(caractere:string){
    if(this.validacao.validarExpressao(caractere, this.resultadoAtual)){
      this.resultadoAtual += caractere;
    }
  }

  
  limpar(){
    this.resultadoAtual = "";
  }

  resultadoFinal() {
      this.resultadoAtual = new Function('return ' + this.resultadoAtual)();

  }
  
}

