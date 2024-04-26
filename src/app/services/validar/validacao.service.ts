import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }

  private operador(caractere: string): boolean {
    return ['+', '-', '/', '*'].includes(caractere);
  }
  
  private zeroDepoisDoOperador(caractere: string, expressao: string): boolean {
    const ultimoCaractere = expressao[expressao.length - 1] || ''; 
    return this.operador(ultimoCaractere) && caractere == '0' ;
  }
  
  private operadorDepois(caractere: string, expressao: string): boolean {
    const ultimoCaractere = expressao[expressao.length - 1] || '';
    return this.operador(ultimoCaractere) && this.operador(caractere);
  }
  
  public validarExpressao(caractere: string, expressao: string): boolean {
    if (expressao == '') {
      if(caractere === '0' || this.operador(caractere)){
        return false;
      }
      return true;
    } else {
      return (this.zeroDepoisDoOperador(caractere, expressao) || this.operadorDepois(caractere, expressao)) ? false : true;
    }
  }
}
