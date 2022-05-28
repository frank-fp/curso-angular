import { Component } from '@angular/core';


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent{
    name: string = 'IronMan';
    age: number = 45;

    get NombreCapitalizado():string{
        return this.name.toLocaleUpperCase()
    }

    obtenerNombre():string{
        return `${this.name} - ${this.age}`;
    }

    changeName(): void{
        this.name = 'Spiderman';
    }

    changeAge(): void{
        this.age = 30;
    }
}