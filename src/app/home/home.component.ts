import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { colaborador } from '../models/colaborador';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array : colaborador[] = [];
  public formAdd : FormGroup;
  public formEdit : FormGroup;
  public f = new Date();
  public jsonColaborador : any = {
    "identificacion": 0,
    "nombre": "",
    "apellido": "",
    "usuarioRed": "",
    "fechaRegistro": 0,
    "estado": "",
    "cargo": ""
  };

  constructor(public service:ServiceMainService, public formBuilder:FormBuilder) {

      this.formAdd = this.formBuilder.group({
        'Nombre': ['', Validators.required],
        'Apellido': ['', Validators.required],
        'Id': ['', Validators.required],
        'User': ['', Validators.required],
        'Cargo': ['', Validators.required],
        'Estado': ['', Validators.required]
      });
      this.formEdit = this.formBuilder.group({
        'Nombre': ['', Validators.required],
        'Apellido': ['', Validators.required],
        'Id': ['', Validators.required],
        'User': ['', Validators.required],
        'Cargo': ['', Validators.required],
        'Estado': ['', Validators.required],
        'FechaIngreso' : ['', Validators.required]
      });
      
      this.service.getAllData().subscribe(data => {
        this.array = data ; // 
        console.log(this.array)
      })
    }

   ngOnInit(): void{}

  public guardarColaborador(){
    this.jsonColaborador["nombre"]=this.formAdd.value.Nombre;
    this.jsonColaborador["apellido"]=this.formAdd.value.Apellido;
    this.jsonColaborador["usuarioRed"]=this.formAdd.value.User;
    this.jsonColaborador["fechaRegistro"]= this.f.getFullYear();
    this.jsonColaborador["estado"]=this.formAdd.value.Estado;
    this.jsonColaborador["cargo"]=this.formAdd.value.Cargo;
    
    this.service.postData(this.jsonColaborador);
  
  } 

  getValue(event:any) {
    let value = event.target.innerHTML;
    console.log("value", value);
}
  
  public eliminarColaborador(id: number){
    console.log(id);
    this.service.deleteData(id.toString());
    
  }
  public editarColaborador(objeto : colaborador){
    this.formEdit.controls['Id'].setValue(objeto.identificacion);
    this.formEdit.controls['Nombre'].setValue(objeto.nombre);
    this.formEdit.controls['Apellido'].setValue(objeto.apellido);
    this.formEdit.controls['User'].setValue(objeto.usuarioRed);
    this.formEdit.controls['FechaIngreso'].setValue(objeto.fechaRegistro);
    this.formEdit.controls['Cargo'].setValue(objeto.cargo);
    this.formEdit.controls['Estado'].setValue(objeto.estado);
  }
  
}
