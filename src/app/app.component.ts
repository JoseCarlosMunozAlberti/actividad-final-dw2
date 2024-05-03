import { Component } from '@angular/core'; // Importamos Component desde Angular

@Component({
  selector: 'app-root', // Selector del componente
  templateUrl: './app.component.html', //  HTML del componente
  styleUrls: ['./app.component.css'] //  CSS de estilos del componente
})
export class AppComponent {
  title = 'Agentes de Valorant'; // Propiedad 'title' que contiene el título de la aplicación
}

