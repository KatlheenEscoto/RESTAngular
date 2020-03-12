import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteRestService } from '../../services/cliente-rest.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  // Variables.
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteRestService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    console.log('Haz hecho clicked!');
    /*this.clienteService.postCliente(this.cliente).subscribe(
      (response: Cliente) => {
        console.log(`El cliente ${response.nombre} ha sido creado con éxito.`);
        this.router.navigate(['/clientes_rest']);
      }
    );*/
    swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    );

  }

}
