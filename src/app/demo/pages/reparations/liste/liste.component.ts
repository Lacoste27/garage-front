import { Component, OnInit } from "@angular/core";
import {
  IReparation,
  IResponse,
  ReparationEtat,
} from "src/app/demo/interfaces/interface";
import { ReparationService } from "src/app/demo/services/reparations/reparation.service";

@Component({
  selector: "app-liste",
  templateUrl: "./liste.component.html",
  styleUrls: ["./liste.component.scss"],
})
export class ListeComponent implements OnInit {
  loading: boolean = false;
  reparations: IReparation[] =[];

  constructor(private reparationService: ReparationService) {}

  ngOnInit(): void {
    this.reparationService
      .listeReparation(ReparationEtat.deposer)
      .subscribe((reponse: IResponse) => {
        if (reponse.success == true) {
          console.log(reponse);
          this.reparations = reponse.data.reparartions;
          this.loading = false;
        }
      });
  }
}
