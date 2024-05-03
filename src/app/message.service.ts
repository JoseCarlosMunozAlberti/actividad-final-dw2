import { Injectable } from '@angular/core'; // Importamos Injectable desde Angular
// Propiedad para almacenar mensajes, inicializada como un array vacío
@Injectable({ providedIn: 'root' }) 
export class MessageService {
  messages: string[] = []; 
  // Método para agregar un mensaje al array de mensajes
  add(message: string) {
    this.messages.push(message);
  }

  // Método para limpiar el array de mensajes, eliminando todos los mensajes almacenados
  clear() {
    this.messages = [];
  }
}

