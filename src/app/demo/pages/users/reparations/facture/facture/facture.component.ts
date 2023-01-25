import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReparation, IResponse } from 'src/app/demo/interfaces/interface';
import { ReparationService } from 'src/app/demo/services/reparations/reparation.service';
import { CardModule } from 'src/app/theme/shared/components/card/card.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule, CardModule],
})
export class FactureComponent implements OnInit {
  id: string;
  reparation: IReparation;
  montantTotal: number = 0;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reparationService: ReparationService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.reparationService
        .detailReparation(this.id)
        .subscribe((reparation: IResponse) => {
          if (reparation.success == true) {
            this.loading = false;
            this.reparation = reparation.data.reparation;
            reparation.data.reparation.reparation_faire.forEach(element => {
              this.montantTotal += Number(element.prix);
            });
          }
        });
    });
  }
}
