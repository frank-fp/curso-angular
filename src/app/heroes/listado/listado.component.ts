import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heros: string[] = ['Spiderman', 'IronMan', 'Thor', 'Hulk'];

  // herosDeleted : string[] = [];
  deletedHero: string = '';
  
  deleteHero(){
    console.log(this.heros[0]);
    this.deletedHero =  this.heros.shift() || '';
    // const deleted =  this.heros.shift()
    // if (deleted != undefined) {
    //   this.herosDeleted.push(deleted)

    // }
    
  }
}
