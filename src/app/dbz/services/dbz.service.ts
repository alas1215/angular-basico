import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 13000,
    },
  ];

  get personajes() {
      // los 3 puntos es el operador spread, separa cada uno de los elemnetos independientes de este arreglo y crea uno nuevo. Para romper las referencias
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje);

}


}
