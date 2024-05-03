import { Component, OnInit } from '@angular/core'; // Importamos Component y OnInit de Angular
import { Hero } from '../hero'; // Importamos la interfaz Hero desde su archivo
import { HeroService } from '../hero.service'; // Importamos el servicio HeroService desde su archivo

@Component({
  selector: 'app-dashboard', // Selector del componente
  templateUrl: './dashboard.component.html', // Plantilla HTML del componente
  styleUrls: [ './dashboard.component.css' ] // Archivo CSS  del componente
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // Declaramos un arreglo de héroes y lo inicializamos como vacío

  constructor(private heroService: HeroService) { } // Constructor que recibe una instancia del servicio HeroService

  ngOnInit(): void {
    this.getHeroes(); // Llamamos al método getHeroes() cuando se inicializa el componente
  }

  getHeroes(): void {
    // Método para obtener héroes del servicio HeroService
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 20));
  }
}

