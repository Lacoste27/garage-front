import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { TokenService } from "../services/jwt/token.service";
import { AtelierComponent } from "./atelier/atelier.component";
import { ClientComponent } from "./client/client.component";
import { FinancierComponent } from "./financier/financier.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    FinancierComponent,
    AtelierComponent,
    ClientComponent,
  ],
})
export class DashboardComponent {
  ShowClient: boolean = false;
  ShowAtelier: boolean = false;
  ShowFinancier: boolean = false;


  constructor(private token: TokenService) {}

  ngOnInit() {
    setTimeout(() => {
      const user = this.token.GetUser();
      switch (user.role) {
        case "client":
          this.ShowClient=true;
          break;
        case "financier":
          this.ShowFinancier = true;
          break;
        case "atelier":
          this.ShowAtelier = true;
          break;
        default:
          break;
      }
    }, 500);
  }
}
