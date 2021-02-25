import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desparasitacion',
  templateUrl: './desparasitacion.component.html',
  styleUrls: ['./desparasitacion.component.css']
})
export class DesparasitacionComponent implements OnInit {
  mascota = 'Síntomas de que mi mascota tiene parásitos';
  calendario = 'Calendario de desparasitación para perros y gatos';
  constructor() { }

  ngOnInit(): void {
  }

}
