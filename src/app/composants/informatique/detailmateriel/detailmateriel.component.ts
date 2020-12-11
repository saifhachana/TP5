import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  identifiant :string ="" ; 
 
   
   // showing:boolean = true; 
    constructor(private materielServices : MaterielService) { }
  /* onshow()
    {
      this.showing = !this.showing; 
    }*/
    onAfficher(id:string)
    {
      this.identifiant = id ; 
      this.materiel = this.materielServices.getMaterielById(id) ; 
      alert(this.materiel); 
      return this.materiel ; 

    }
    showing:boolean = true; 
    onshow()
  {
    this.showing = !this.showing; 
  }   
  materiel:Materiel ; 
  ngOnInit(): void {
    this.materiel = this.materielServices.getMaterielById('2') ; 
  }

}
