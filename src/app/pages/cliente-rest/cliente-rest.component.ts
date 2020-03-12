import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteRestService } from '../../services/cliente-rest.service';

@Component({
  selector: 'app-cliente-rest',
  templateUrl: './cliente-rest.component.html',
  styleUrls: ['./cliente-rest.component.css']
})
export class ClienteRestComponent implements OnInit {

  // Variables.
  clientes: Cliente[];

  constructor(private clienteService: ClienteRestService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.getClientes().subscribe(
      respuesta => this.clientes = respuesta
    );
  }

}
