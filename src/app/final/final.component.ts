import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
})
export class FinalComponent implements OnInit {

  @Input()  nombre! : string; 
  @Input()  ano! : string; 
  @Input()  mensajePadre! : string;
  @Input()  mensajeActual! : string;
  @Output() mensajeEvento = new EventEmitter<string>();

  constructor() {
  }

  public mensajeParaPadre1 : string = " Primer proyecto Angular";
  public mensajeParaPadre2 : string = " Primer proyecto Angular mayo 2021";
  public flag : boolean = true


  public enviarMensaje(){
      if(this.flag){
        this.flag = false;
        this.mensajeEvento.emit(this.mensajeParaPadre1);
      }else{
        this.flag = true;
        this.mensajeEvento.emit(this.mensajeParaPadre2)
      }
  }

  ngOnInit(): void {
  }

}
