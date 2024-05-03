import { Component, OnInit } from '@angular/core'; // Importamos Component y OnInit de Angular
import { ActivatedRoute } from '@angular/router'; // Importamos ActivatedRoute para obtener información sobre la ruta activada
import { Location } from '@angular/common'; // Importamos Location para interactuar con la historia del navegador
import { Hero } from '../hero'; // Importamos la interfaz Hero desde su archivo
import { HeroService } from '../hero.service'; // Importamos el servicio HeroService desde su archivo

@Component({
  selector: 'app-hero-detail', // Selector del componente
  templateUrl: './hero-detail.component.html', // Plantilla HTML del componente
  styleUrls: [ './hero-detail.component.css' ] // Archivo CSS de estilos del componente
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined; 

  constructor(
    private route: ActivatedRoute, // Inyectamos ActivatedRoute
    private heroService: HeroService, // Inyectamos HeroService 
    private location: Location // Inyectamos Location 
  ) {}

  ngOnInit(): void {
    this.getHero(); // Llamamos al método getHero() cuando se inicializa el componente
  }

  getHero(): void {
    // Método para obtener un héroe según el ID de la ruta activada
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); 
    this.heroService.getHero(id) 
      .subscribe(hero => this.hero = hero); 
  }

  goBack(): void {
    this.location.back(); // Método para retroceder en la historia del navegador
  }

  save(): void {
    // Método para guardar los cambios realizados en un héroe
    if (this.hero) { 
      this.heroService.updateHero(this.hero) 
        .subscribe(() => this.goBack());
    }
  }
}

