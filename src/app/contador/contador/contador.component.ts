import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <!-- <button (click)="numero = numero + 1">+1</button> -->
    <!-- <button (click)="acumular(1)">+5</button> -->
    <!-- <span>{{ numero }}</span> -->

    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>

    <!--<button (click)="restar()">-5</button>-->
    <!-- <button (click)="numero = numero - 1">-1</button> -->
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

  //  sumar(){
  //    this.numero += 1;
  //  }

  //  restar(){
  //    this.numero -= 1;
  //  }
}
