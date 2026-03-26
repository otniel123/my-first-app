import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {

  enviaInformacao(info: string){
    console.log(info)
  }
}
