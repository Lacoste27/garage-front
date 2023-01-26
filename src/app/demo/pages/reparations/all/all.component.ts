import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IReparation, IResponse } from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";
import { SharedModule } from "src/app/theme/shared/shared.module";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.scss"],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
  ],
})
export class AllComponent implements OnInit {
  reparations: IReparation[] = [];
  loading: boolean = false;

  constructor(private reparationService: ReparationService) {}
  ngOnInit(): void {
    this.loading = true;
    this.getAll();
  }

  getAll() {
    this.reparationService.all().subscribe((reponse: IResponse) => {
      if (reponse.success == true) {
        console.log(reponse);
        this.reparations = reponse.data.reparartions;
        this.loading = false;
      }
    });
  }
}
