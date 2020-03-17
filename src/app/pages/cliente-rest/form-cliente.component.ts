import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { Region } from '../../models/region';
import { ClienteRestService } from '../../services/cliente-rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  // Variables.
  cliente: Cliente = new Cliente();
  regiones: Region[];

  constructor(private clienteService: ClienteRestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDatos();
    this.cargarRegiones();
  }

  public cargarRegiones(): void {
    this.clienteService.getRegiones().subscribe(
      respuesta => {
        this.regiones = respuesta;
        console.log(this.regiones);
      }
    );
  }

  public cargarDatos(): void {
    this.route.params.subscribe(
      parametros => {
        let id = parametros['id'];
        if (id) {
          this.clienteService.getCliente(id).subscribe(
            respuesta => {
              if (respuesta != null){
                this.cliente = respuesta;
              }
            }
          );
        }
      }
    );
  }

  public create(): void {
    this.clienteService.postCliente(this.cliente).subscribe(
      (response: Cliente) => {
        this.router.navigate(['/clientes_rest']);
        swal.fire(
          '¡Nuevo cliente creado!',
          `El cliente ${response.nombre} ha sido creado con éxito.`,
          'success'
        );
      }
    );
  }

  public update(): void {
    this.clienteService.putCliente(this.cliente).subscribe(
      respuesta => {
        this.router.navigate(['/clientes_rest']);
        swal.fire(
          '¡Cliente editado!',
          `El cliente ${this.cliente.nombre} ha sido editado con exito`,
          'success'
        );
      }
    );
  }

  public compararRegion(o1: Region, o2: Region) {
    return (o1 == null || o2 == null) ? false : o1.id === o2.id;
  }
}
