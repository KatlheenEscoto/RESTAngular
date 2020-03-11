import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { CLIENTES } from '../pages/cliente/cliente.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {


  constructor(private http: HttpClient) {}

  // Desde el archivo.json
  public getJSONClientes() {
    return this.http.get('assets/json/clientes.json');
  }

  // Retornar clientes desde el .ts
  public getTSClientes(): Cliente[] {
    return CLIENTES;
  }

}
