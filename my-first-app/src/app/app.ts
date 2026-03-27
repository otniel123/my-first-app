import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './components/home/home'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  nomeDinamico = signal(0);

  logar(event: string){
    console.log(event)
  }

  mudarValorProps(){
    this.nomeDinamico.update(valor => valor + 1);
  }
}
