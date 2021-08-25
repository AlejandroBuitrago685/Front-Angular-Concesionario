import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CocheServiceService {

  RutaCoche = environment.CarUrl;

  constructor( private http:HttpClient) {}


  //Obtener coches
  ObtenerCoches():Observable<Car[]>{
    return this.http.get<Car[]>(this.RutaCoche + "/get");
  }

  //Crear nuevo coche
  add(coche:Car):Observable<Car>{
    return this.http.post<Car>(this.RutaCoche + "/add",coche);
  }

  //Obtener un único coche
  get(id:string):Observable<Car>{
    return this.http.get<Car>(this.RutaCoche + '/getid/' + id);
  }

  //Borrar cpche
  delete(id:string):Observable<Car>{
    return this.http.delete<Car>(this.RutaCoche + '/delete/' + id);
  }

  //Actualizar coche
  update(estudiante:Car):Observable<Car>{
    return this.http.put<Car>(this.RutaCoche + "/update/", estudiante);
  }

}
