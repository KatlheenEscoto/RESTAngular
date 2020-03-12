import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteRestService {

  private urlClientes = 'http://127.0.0.1:8080/clientes';
  private httpHeders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {}

  // GET.
  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlClientes);
  }

  // POST.
  public postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlClientes, cliente, {headers: this.httpHeders});
  }

}
