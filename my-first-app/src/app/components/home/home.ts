import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private enviaFormularioService = inject(EnviaFormulario)
  nome:string = "Otniel"
  meuBooleando: boolean = false;
  idButton:string = "hgdshuag";
  deveMostrarTtitulo:boolean = false;
  listItems = ["um", "dois", "tres"]

  @Input("name") minhaPropsDeFora!: string;
  @Output() emitindoValorName = new EventEmitter<string>()

  atualizaBooleano(valor: boolean){
    this.meuBooleando = valor;
  }

  submit(){
    this.emitindoValorName.emit(this.nome)
    this.enviaFormularioService.enviaInformacao("Enviando informação para o back")
  }
}
