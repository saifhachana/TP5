import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  constructor(private materielService:MaterielService) { }
  
  materiels:Materiel[];
  
  ngOnInit(): void {
    this.materiels = this.materielService.getMateriels();
  }

}
