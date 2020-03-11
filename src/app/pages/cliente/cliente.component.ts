import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteServiceService } from '../../services/cliente-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  // Variables;
  clientesTS: Cliente[];
  clientesJSON: Cliente[];
  clientes: Cliente[] = [];

  constructor(private clientesService: ClienteServiceService) { }

  ngOnInit(): void {

    // Consumiendo desde un .ts
    this.clientesTS = this.clientesService.getTSClientes();
    // this.clientes = this.clientesTS;

    // Consumiendo desde un .json
    this.clientesService.getJSONClientes().subscribe( (respuesta) => {
      this.clientesJSON = respuesta as Cliente[];
      //this.clientes = this.clientesJSON;
    });

    // Consumiendo .ts de un observable.
    this.clientesService.getClientesObservable().subscribe(
      respuesta => this.clientes = respuesta
    );

  }


}
