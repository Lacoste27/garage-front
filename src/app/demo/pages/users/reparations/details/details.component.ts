import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { CardModule } from "../../../../../theme/shared/components/card/card.module";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  standalone: true,
  imports: [CommonModule, SharedModule, CardModule, NgxSpinnerModule],
})
export class DetailsComponent implements OnInit {
  id: string;
  reparation: IReparation;
  loading: boolean = false;
  haspaiement: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reparationService: ReparationService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getReparation(this.id);

    this.reparationService.Refresh.subscribe((response) => {
      this.getReparation(this.id);
    });
  }

  getReparation(id: string) {
    this.spinner.show();
    this.reparationService
      .detailReparation(id)
      .subscribe((reparation: IResponse) => {
        if (reparation.success == true) {
          this.reparation = reparation.data.reparation;
          this.haspaiement = this.reparation.paiement;
          this.spinner.hide();
        }
      });
  }
}
