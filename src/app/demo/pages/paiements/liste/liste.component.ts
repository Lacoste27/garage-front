import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import {
  IReparation,
  IResponse,
  ReparationEtat,
} from "src/app/demo/interfaces/interface";
import { PaiementsService } from 'src/app/demo/services/paiements/paiements.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  standalone: true,
  imports:[CommonModule, SharedModule, RouterModule]
})
export class ListeComponent implements OnInit {
  paiements: IReparation[] =[];
  loading: boolean=false;

  constructor(private paiementService: PaiementsService){

  }
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){  
    this.paiementService.getAll().subscribe({  
      next: (response: IResponse) => {
        this.paiements = response.data.paiements;
      },
    })
  }

}
