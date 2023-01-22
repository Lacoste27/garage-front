import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { CardModule } from "../../../../../theme/shared/components/card/card.module";
import { SharedModule } from "src/app/theme/shared/shared.module";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  standalone: true,
  imports: [CommonModule, SharedModule, CardModule],
})
export class DetailsComponent implements OnInit {
  id: string;
  reparation: IReparation;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reparationService: ReparationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.reparationService
        .detailReparation(this.id)
        .subscribe((reparation: IResponse) => {
          if (reparation.success == true) {
            console.log(reparation.data);
            this.reparation = reparation.data.reparation;
          }
        });
    });
  }
}
