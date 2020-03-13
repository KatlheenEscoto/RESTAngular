import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteRestService {

  private urlClientes = 'http://127.0.0.1:8080/clientes';
  private urlCliente = 'http://127.0.0.1:8080/cliente';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) {}

  // GET.
  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlClientes);
  }

  // POST.
  public postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlClientes, cliente, {headers: this.httpHeaders});
  }

  // GET by ID.
  public getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlCliente}/${id}`);
  }

  // PUT.
  public putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlCliente}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

}
