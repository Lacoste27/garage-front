import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { IResponse, IVoiture } from "src/app/demo/interfaces/interface";
import { UsersService } from "src/app/demo/services/users/users.service";
import { SharedModule } from "src/app/theme/shared/shared.module";

@Component({
  selector: "app-liste",
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, NgxSpinnerModule],
  templateUrl: "./liste.component.html",
  styleUrls: ["./liste.component.scss"],
})
export class ListeComponent implements OnInit {
  voitures: IVoiture[] = [];
  loading: boolean = false;

  constructor(
    private userService: UsersService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.userService.listVoitures().subscribe((reponse: IResponse) => {
      if (reponse.success == true) {
        this.voitures = reponse.data;
        this.spinner.hide();
      }
    });
  }

  deposerVoiture(numeroVoiture: string) {
    this.loading = true;
    this.userService
      .deposerVoiture(numeroVoiture)
      .subscribe((reponse: IResponse) => {
        if (reponse.success == true) {
          this.loading = false;
          this.router.navigateByUrl("/users/reparations/liste");
        }
      });
  }
}
