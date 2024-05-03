import { NgModule } from '@angular/core'; // Importamos NgModule desde Angular
import { BrowserModule } from '@angular/platform-browser'; // Importamos BrowserModule para la aplicación web
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para manejar formularios en la aplicación
import { HttpClientModule } from '@angular/common/http'; // Importamos HttpClientModule para hacer solicitudes HTTP
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Importamos HttpClientInMemoryWebApiModule para simular una API HTTP
import { InMemoryDataService } from './in-memory-data.service'; // Importamos el servicio InMemoryDataService para simular una base de datos en memoria
import { AppRoutingModule } from './app-routing.module'; // Importamos AppRoutingModule que contiene las rutas de la aplicación
import { AppComponent } from './app.component'; // Importamos AppComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Importamos DashboardComponent
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importamos HeroDetailComponent
import { HeroesComponent } from './heroes/heroes.component'; // Importamos HeroesComponent
import { HeroSearchComponent } from './hero-search/hero-search.component'; // Importamos HeroSearchComponent
import { MessagesComponent } from './messages/messages.component'; // Importamos MessagesComponent

@NgModule({
  imports: [
    BrowserModule, // Importamos BrowserModule para la aplicación web
    FormsModule, // Importamos  FormsModule para manejar formularios en la aplicación
    AppRoutingModule, // Importamos  AppRoutingModule que contiene las rutas de la aplicación
    HttpClientModule, // Importamos  HttpClientModule para hacer solicitudes HTTP

    // Solo cuando tengas un servidor podrás ejecutar sin el HttpClient
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false } // Configuramos el módulo HttpClientInMemoryWebApiModule para simular una API HTTP
    )
  ],
  declarations: [
    AppComponent, // Declaramos principal AppComponent
    DashboardComponent, // Declaramos DashboardComponent
    HeroesComponent, // Declaramos HeroesComponent
    HeroDetailComponent, // Declaramos HeroDetailComponent
    MessagesComponent, // Declaramos MessagesComponent
    HeroSearchComponent // Declaramos HeroSearchComponent
  ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { } 
