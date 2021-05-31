import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';

const routes: Routes = [
  {path : "", redirectTo: "home", pathMatch:"full"},
  {path: "home", component:HomeComponent },
  {path: "pag1" , component:Pag1Component},
  {path: "pag2", component:Pag2Component},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
