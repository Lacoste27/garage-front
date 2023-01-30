import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { IResponse, IStatistique } from "../../interfaces/interface";
import { TokenService } from "../../services/jwt/token.service";
import { StatistiqueService } from "../../services/statistique/statistique.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
  standalone: true,
  imports: [SharedModule, CommonModule, NgxSpinnerModule],
})
export class ClientComponent implements OnInit {
  statistiques: any = [];
  statistique: IStatistique;

  constructor(
    private statistiqueService: StatistiqueService,
    private token: TokenService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    const user = this.token.GetUser();
    this.statistiqueService.countClientReparation(user.email).subscribe({
      next: (response: IResponse) => {
        this.statistique = response.data;
        this.spinner.hide();
      },
      error: (error) => {},
    });
  }
}
