import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
  nombre ="Yan Carlos Certuche ";
  ano = 2020;
  mensajePadre  : string = "¡Curso Angular!";
  mensajeDesdeHijo : string = "";
  mensajeACK : string ="ok";

  constructor(){
  }

  public receiveMessage($event: string){
    this.mensajeDesdeHijo=$event;
  }
  
  ngOnInit(): void {
  }



}
