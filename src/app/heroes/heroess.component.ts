import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroess.component.html',
  styleUrls: ['./heroess.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})

export class HeroesComponent {
   //1.Agregamos una propiedad a heroscomponent para un heroe llamado Windstom
  //hero = 'Windstorm';
    //2.Cambiamos 
 /* hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  /*Cambiamos el codigo para que podamos seleccionar la clase Heroes y podamos modificar la lista*/
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

