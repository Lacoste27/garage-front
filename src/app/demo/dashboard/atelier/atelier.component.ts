import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { IResponse, IStatistique } from "../../interfaces/interface";
import { TokenService } from "../../services/jwt/token.service";
import { StatistiqueService } from "../../services/statistique/statistique.service";

@Component({
  selector: "app-atelier",
  templateUrl: "./atelier.component.html",
  styleUrls: ["./atelier.component.scss"],
  standalone: true,
  imports: [SharedModule, CommonModule, NgxSpinnerModule],
})
export class AtelierComponent implements OnInit {
  statistique: IStatistique;

  constructor(
    private token: TokenService,
    private statistiqueService: StatistiqueService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    const user = this.token.GetUser();
    this.statistiqueService.countAtelierReparation(user.email).subscribe({
      next: (response: IResponse) => {
        this.statistique = response.data;
        this.spinner.hide();
      },
      error: (error) => {},
    });
  }
}
