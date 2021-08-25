import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './Client';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  RutaCliente = environment.ClientUrl;

  constructor( private http:HttpClient) {}


  //Obtener coches
  ObtenerCoches():Observable<Client[]>{
    return this.http.get<Client[]>(this.RutaCliente + "/get");
  }

  //Crear nuevo coche
  add(cliente:Client):Observable<Client>{
    return this.http.post<Client>(this.RutaCliente + "/add",cliente);
  }

  //Obtener un único cliente
  get(id:string):Observable<Client>{
    return this.http.get<Client>(this.RutaCliente + '/getid/' + id);
  }

  //Borrar cliente
  delete(id:string):Observable<Client>{
    return this.http.delete<Client>(this.RutaCliente + '/delete/' + id);
  }

  //Actualizar cliente
  update(cliente:Client):Observable<Client>{
    return this.http.put<Client>(this.RutaCliente + "/update/", cliente);
  }
}
