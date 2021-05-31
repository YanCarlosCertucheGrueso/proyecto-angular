import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin : FormGroup;

  constructor(public router:Router , public formBuilder:FormBuilder) {
    this.formLogin = this.formBuilder.group({
      'Usuario': ['', Validators.required],
      'Contraseña': ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  public ingresar(){
    if(this.formLogin.valid){
      console.log(this.formLogin.value.Usuario)
      console.log(this.formLogin.value.Contraseña)
      this.router.navigate(['./home']);
    }
  }

}
