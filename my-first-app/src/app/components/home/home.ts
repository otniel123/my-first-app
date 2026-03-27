import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy, OnChanges{
  
  private enviaFormularioService = inject(EnviaFormulario)
  nome:string = "Otniel"
  meuBooleando: boolean = false;
  idButton:string = "hgdshuag";
  deveMostrarTtitulo:boolean = false;
  listItems: string[] = [];

  //@Input("name") minhaPropsDeFora!: string;
  @Input("name") minhaPropsDeFora: number = 2;
  @Output() emitindoValorName = new EventEmitter<string>()


  ngOnInit(): void {
    console.log("OnInit executado com sucesso")
    for(var i = 0; i<11; i++){
      this.listItems[i] = i.toString();
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("Valor anterior: " + changes['minhaPropsDeFora'].previousValue + " Valor atual: " + changes['minhaPropsDeFora'].currentValue + " Primeira alteração? " + changes['minhaPropsDeFora'].firstChange);
  }
    ngOnDestroy(): void {
    console.log("Por favor, não me destruaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  }

  atualizaBooleano(valor: boolean){
    this.meuBooleando = valor;
  }

  submit(){
    this.emitindoValorName.emit(this.nome)
    this.enviaFormularioService.enviaInformacao("Enviando informação para o back")
  }
}
