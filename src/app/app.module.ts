import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- 1.NgModel importado
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroess.component';

@NgModule({
  declarations: [ 
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,//1.Importamos el modulo de formularios
    HeroesComponent //1.Tambien debe ser declarado en el array el Heroes component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
