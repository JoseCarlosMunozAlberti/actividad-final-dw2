import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'; // Importamos funciones y clases necesarias para realizar pruebas unitarias en Angular
import { RouterTestingModule } from '@angular/router/testing'; // Importamos el módulo RouterTestingModule para pruebas de enrutamiento
import { of } from 'rxjs'; // Importamos la función 'of' de RxJS para crear un observable
import { HeroSearchComponent } from '../hero-search/hero-search.component'; // Importamos el componente HeroSearchComponent para utilizarlo en las pruebas
import { HeroService } from '../hero.service'; // Importamos el servicio HeroService para utilizarlo en las pruebas
import { HEROES } from '../mock-heroes'; // Importamos la lista de héroes de prueba
import { DashboardComponent } from './dashboard.component'; // Importamos el componente DashboardComponent que estamos probando

describe('DashboardComponent', () => {
  let component: DashboardComponent; // Declaramos una variable para almacenar una instancia del componente DashboardComponent
  let fixture: ComponentFixture<DashboardComponent>; // Declaramos una variable para almacenar el componente y su contexto para las pruebas
  let heroService; // Declaramos una variable para el servicio HeroService
  let getHeroesSpy: jasmine.Spy; // Declaramos una variable para el espía que utilizaremos para verificar si se llama al método getHeroes del servicio

  beforeEach(waitForAsync(() => {
    // Configuramos el entorno de pruebas
    heroService = jasmine.createSpyObj('HeroService', ['getHeroes']); // Creamos un espy del servicio HeroService con el método getHeroes
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES)); // Configuramos el espía para devolver un observable con la lista de héroes de prueba
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, HeroSearchComponent], // Declaramos los componentes que se utilizarán en las pruebas
      imports: [RouterTestingModule.withRoutes([])], // Importamos el módulo RouterTestingModule con rutas vacías para pruebas de enrutamiento
      providers: [{provide: HeroService, useValue: heroService}] 
    }).compileComponents(); 

    fixture = TestBed.createComponent(DashboardComponent); // Creamos una instancia del componente DashboardComponent
    component = fixture.componentInstance; 
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy(); // Verificamos si el componente se ha creado exitosamente
  });

  it('should display "Top Heroes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Heroes'); // Verificamos si el encabezado del componente es "Top Heroes"
  });

  it('should call heroService', waitForAsync(() => {
    expect(getHeroesSpy.calls.any()).toBe(true); // Verificamos si se ha llamado al método getHeroes del servicio HeroService
  }));

  it('should display 4 links', waitForAsync(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4); // Verificamos si hay 4 enlaces en el componente
  }));
});

