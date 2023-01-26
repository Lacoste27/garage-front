import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { PaiementsService } from "src/app/demo/services/paiements/paiements.service";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";

@Component({
  selector: "app-etat",
  templateUrl: "./etat.component.html",
  styleUrls: ["./etat.component.scss"],
  standalone: true,
  imports: [SharedModule, CommonModule],
})
export class EtatComponent implements OnInit {
  loading: boolean = false;
  reparation: IReparation;
  total: number = 0;

  constructor(
    private reparationsService: ReparationService,
    private paiementService: PaiementsService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.etat();
  }

  etat() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.reparationsService
        .detailReparation(params["id"])
        .subscribe((reparation: IResponse) => {
          if (reparation.success == true) {
            this.loading = false;
            this.reparation = reparation.data.reparation;
            this.setTotal();
          }
        });
    });
  }

  setTotal() {
    this.reparation.reparation_faire.forEach((element) => {
      this.total += Number(element.prix);
    });
  }

  valider() {
    this.loading = true;
    this.paiementService.valider(this.reparation.paiement._id).subscribe({
      next: (response: IResponse) => {
        if (response.success) {
          this.loading = false;
          this.toast.ShowSuccess("Paiements", response.message.toString());
        }
      },
      error: (error) => {
        this.loading = false;
        this.toast.ShowError("Paiements", error.toString());
      },
    });
  }
}
