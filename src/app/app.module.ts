import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinalComponent } from './final/final.component';
import {ServiceMainService} from '../app/service-main.service'
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    FinalComponent,
    HomeComponent,
    Pag1Component,
    Pag2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceMainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
