import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteRestService } from '../../services/cliente-rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-rest',
  templateUrl: './cliente-rest.component.html',
  styleUrls: ['./cliente-rest.component.css']
})
export class ClienteRestComponent implements OnInit {

  // Variables.
  clientes: Cliente[];

  constructor(private clienteService: ClienteRestService,
              private router: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.getClientes().subscribe(
      respuesta => this.clientes = respuesta
    );
  }

  public delete(cliente: Cliente): void {
    swal.fire({
      title: `¿Está seguro de eliminar?`,
      text: `¿Está seguro de eliminar al cliente ${cliente.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#4285f4',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.clienteService.deleteCliente(cliente.id).subscribe(
          respuesta => {
            this.clientes = this.clientes.filter(c => c !== cliente);
            swal.fire(
              '¡Eliminado!',
              'El cliente ha sido eliminado con éxito.',
              'success'
            );
          }
        );
      }
    });
  }

}
