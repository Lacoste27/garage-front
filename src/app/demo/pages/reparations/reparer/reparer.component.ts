import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IReparation, IResponse, ReparationEtat } from 'src/app/demo/interfaces/interface';
import { ReparationService } from 'src/app/demo/services/reparations/reparation.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-reparer',
  templateUrl: './reparer.component.html',
  styleUrls: ['./reparer.component.scss'],
  standalone: true,
  imports:[SharedModule, CommonModule, RouterModule]
})
export class ReparerComponent implements OnInit {
  reparations: IReparation[] = [];
  loading: boolean = false;

  constructor(private reparationService: ReparationService){}



  ngOnInit(): void {
    this.reparationService
      .listeReparation(ReparationEtat.encours)
      .subscribe((reponse: IResponse) => {
        if (reponse.success == true) {
          console.log(reponse);
          this.reparations = reponse.data.reparartions;
          this.loading = false;
        }
      });
  }
  
}
