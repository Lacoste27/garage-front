import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { VoitureService } from "src/app/demo/services/voitures/voiture.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { CardModule } from "../../../../../theme/shared/components/card/card.module";

@Component({
  selector: "app-historique",
  templateUrl: "./historique.component.html",
  styleUrls: ["./historique.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    RouterModule,
    NgxSpinnerModule,
  ],
})
export class HistoriqueComponent implements OnInit {
  id: string;
  loading: boolean = false;
  reparations: IReparation[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private voitureService: VoitureService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["idvoiture"];
      this.voitureService
        .listRepartionOfVoiture(params["idvoiture"])
        .subscribe((reps: IResponse) => {
          if (reps.success) {
            this.reparations = reps.data.historiques;
            this.spinner.hide();
          }
        });
    });
  }
}
