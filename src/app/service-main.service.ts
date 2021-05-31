import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { colaborador } from './models/colaborador';

@Injectable({
  providedIn: 'root'
})

export class ServiceMainService {

  public url : string = environment.UrlApi

  constructor( public http:HttpClient) { }

  public getAllData() : Observable<colaborador[]>{
    return this.http.get<colaborador[]>(this.url);
  }

  public getIdData(id : string) : Observable<colaborador>{
    return this.http.get<colaborador>(`${this.url}/${id}`);
  }

  public postData(cuerpo:JSON){
    console.log("cuerpo del servicio", cuerpo)
    return this.http.post(this.url, cuerpo).subscribe(res =>{console.log(res)});
  }

  public putData(cuerpo : JSON, id : string) {
    return this.http.put(`${this.url}/${id}`, cuerpo);
  }

  public deleteData(id : string) {
    console.log("entra a eliminarse", id)
    return this.http.delete(`${this.url}/${id}`).subscribe(res =>{console.log(res)});;
  }
}
