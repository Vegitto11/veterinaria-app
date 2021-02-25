import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent implements OnInit {
  perro = 'Vacunación para perros';
  gato = 'Vacunación para gatos';
  /*fotos =
  { 
    imagenp: 'assets/Images/calendario-perros.png';
    
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
