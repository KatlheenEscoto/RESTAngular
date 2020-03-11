import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Variables.
  fecha: number = new Date().getFullYear();

  contenido = {
    "autor": "Katlheen",
    "pagina": "http://www.facebook.com"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
