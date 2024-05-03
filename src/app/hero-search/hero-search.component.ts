import { Component, OnInit } from '@angular/core'; // Importamos Component y OnInit desde '@angular/core'
import { Observable, Subject } from 'rxjs'; // Importamos Observable y Subject desde 'rxjs'
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators'; // Importamos operadores de rxjs para manipular observables
import { Hero } from '../hero'; // Importamos el modelo Hero desde '../hero'
import { HeroService } from '../hero.service'; // Importamos el servicio HeroService desde '../hero.service'
//componentes que importamos
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html', 
  styleUrls: [ './hero-search.component.css' ] 
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>; 
  private searchTerms = new Subject<string>(); 
  constructor(private heroService: HeroService) {} 

  // Método para realizar una búsqueda
  search(term: string): void {
    this.searchTerms.next(term); // Emite el término de búsqueda al Subject
  }

  ngOnInit(): void {
    // Al inicializar el componente, asignamos el observable de héroes usando operadores de rxjs
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap((term: string) => this.heroService.searchHeroes(term)), 
    );
  }
}

