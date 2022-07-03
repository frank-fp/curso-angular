import { Component, } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
// import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 10000
  }
    
  // get personajes():Personaje[] {
  //   return this.dbzService.personajes
  // }
  
  constructor(){}

  // agregarNuevoPersonaje(argumento: Personaje){
  //   // console.log(argumento);
  //   this.personajes.push(argumento);
  // }
}
