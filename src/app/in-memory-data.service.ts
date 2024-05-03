import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
//array de heroes
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Raze',description: "Duelista hecho para rush y limpiar puntos rapido", image:"assets/raze.png" },
      { id: 2, name: 'ISO',description: "Duelista de complemento, limpia puntos relativamente facil", image:"assets/iso.png" },
      { id: 3, name: 'Viper',description: "Smoker con un control absoluto del sitio y una entrada forzada igual de fuerte", image:"assets/viper.png" },
      { id: 4, name: 'Brimstone',description: "Gran smoker, facil de usar y apto para jugadores nuevos", image:"assets/brimstone.png" },
      { id: 5, name: 'Omen',description: "Smoker de gran dificultad, mucha movilidad y specializado en el rush sigiloso", image:"assets/omen.png" },
      { id: 6, name: 'Sage',description: "Centinela de gran reelevancia si tienes una vicion de juego intensa", image:"assets/sage.png" },
      { id: 7, name: 'Neon',description: "Duelista con una movilidad absurda, complejo de usar debido a ello", image:"assets/neon.png" },
      { id: 8, name: 'Phoenix',description: "Duelista agresivo con muchas habilidades de entry, perfecto para jugadores nuevos", image:"assets/phoenix.png" },
      { id: 9, name: 'Breach',description: "Iniciador semiduelista, facil de usar aunque no por ello es facil de masterizar", image:"assets/breach.png" },
      { id: 10, name: 'Skye',description: "Iniciador de gran dificultad, jugadores nuevos pueden sufrir usandola", image:"assets/skye.png" },
      { id: 11, name: 'KAY/O',description: "Iniciador con un grandioso kit de habilidades, recomendado a los jugadores que desean masterizarse", image:"assets/kayo.png" },
      { id: 12, name: 'Chamber',description: "Centinela agresivo, necesitas buen AIM para jugarlo bien", image:"assets/chamber.png" },
      { id: 13, name: 'Fade',description: "Iniciador de media dificultad pero bueno para angulos cerrados", image:"assets/fade.png"},
      { id: 14, name: 'Reyna',description: "Duelista con un kit de habilidades hecho para matar", image:"assets/reyna.png" },
      { id: 15, name: 'Gekko',description: "Iniciador muy molesto, hecho para jugadores tanto nuevos como experimentados", image:"assets/gekko.png" },
      { id: 16, name: 'Yoru',description: "Duelista muy dificil de usar, habilidades hechas para jugadores ya experimentados", image:"assets/yoru.png" },
      { id: 17, name: 'Jett',description: "Duelista dificil de usar, complejidad dependiendo del nivel del jugador", image:"assets/jett.png" },
      { id: 18, name: 'Harbor',description: "Smoker spamer, divertido de jugar y muy flexible", image:"assets/harbor.png" },
      { id: 19, name: 'KillJoy',description: "Centinela hecho para sitear un site, (valga la redundancia)", image:"assets/killjoy.png" },
      { id: 20, name: 'DeadLock',description: "Centinela trampero, bueno para cubrir el flashsite del enemigo", image:"assets/deadlock.png" }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
