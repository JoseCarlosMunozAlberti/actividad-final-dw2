import { Component } from '@angular/core'; // Importamos el Component desde Angular
import { MessageService } from '../message.service'; // Importamos el MessageService desde su archivo

@Component({
  selector: 'app-messages', // Selector del componente
  templateUrl: './messages.component.html', // Plantilla HTML del componente
  styleUrls: ['./messages.component.css'] // Archivo CSS de estilos del componente
})
export class MessagesComponent {
// Constructor que inyecta una instancia del servicio MessageService
  constructor(public messageService: MessageService) {} 

}

