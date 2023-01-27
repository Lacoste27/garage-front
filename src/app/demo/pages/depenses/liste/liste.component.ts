import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IDepense, IResponse } from "src/app/demo/interfaces/interface";
import { DepensesService } from "src/app/demo/services/depenses/depenses.service";
import { SharedModule } from "src/app/theme/shared/shared.module";

@Component({
  selector: "app-liste",
  templateUrl: "./liste.component.html",
  styleUrls: ["./liste.component.scss"],
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
})
export class ListeComponent implements OnInit {
  depenses: IDepense[] = [];

  constructor(private depenseService: DepensesService) {}

  ngOnInit(): void {
    this.depenseService.all().subscribe({
      next: (depenses: IResponse) => {
        if (depenses.data) {
          console.log(depenses);
          this.depenses = depenses.data.depenses;
        }
      },
      error: (erreur) => {},
    });
    throw new Error("Method not implemented.");
  }
}
