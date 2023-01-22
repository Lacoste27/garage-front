import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { AtelierService } from "src/app/demo/services/atelier/atelier.service";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { CardModule } from "src/app/theme/shared/components";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";

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
  enable: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private reparationsService: ReparationService,
    private atelierService: AtelierService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.reparationsService
        .detailReparation(this.id)
        .subscribe((reparation: IResponse) => {
          if (reparation.success == true) {
            console.log(reparation.data);
            this.loading = false;
            this.reparation = reparation.data.reparation;
          }
        });
    });
  }

  receptionner() {
    this.loading = true;
    this.atelierService.reception(this.reparation._id).subscribe({
      next: (result: IResponse) => {
        if (result.success) {
          this.loading = true;
          this.enable = false;
          this.toast.ShowSuccess("Mise à jour", result.message.toString());
        }
      },
    });
  }
}
