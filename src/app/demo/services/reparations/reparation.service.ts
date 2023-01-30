import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject, tap } from "rxjs";
import {
  DetailsReparations,
  IReparation,
  ReparationEtat,
  ReparationVoitureEtat,
} from "../../interfaces/interface";
import { AuthentificationService } from "../authentification/authentification.service";

@Injectable({
  providedIn: "root",
})
export class ReparationService {
  private base_url = "https://back-m1p10mean.onrender.com/reparations/";

  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  private _refresh = new Subject<void>();

  get Refresh() {
    return this._refresh;
  }

  detailReparation(idreparation: string) {
    let urlDetailReparation = this.base_url + idreparation + "/detail";
    return this.http.get(urlDetailReparation, { headers: this.headers });
  }

  all() {
    return this.http.get(this.base_url, { headers: this.headers });
  }

  listeReparation(etat: string): Observable<Object> {
    const url = this.base_url + "liste?etat=" + etat;
    const parameter: HttpParams = new HttpParams();

    parameter.set("etat", etat);

    return this.http.get(url);
  }

  listeSortir(): Observable<Object> {
    const url = this.base_url + "sortir/liste";
    return this.http.get(url);
  }

  changeReparationEtat(reparation_id: string) {
    const url = this.base_url + "change";

    const body = {
      data: {
        reparation_id: reparation_id,
        etat: ReparationEtat.fini,
      },
    };

    return this.http.post(url, body);
  }

  changeReparationsDetailseEtat(
    reparation_id: string,
    repaaration_detail_id: string
  ) {
    const url = this.base_url + "voiture/change";

    const body = {
      data: {
        reparation_detail_id: repaaration_detail_id,
        reparation_id: reparation_id,
        etat: ReparationVoitureEtat.fini,
      },
    };

    return this.http.post(url, body).pipe(
      tap(() => {
        this._refresh.next();
      })
    );
  }

  addReparationDetails(
    reperation_id: string,
    reparationdetails: DetailsReparations
  ) {
    const url = this.base_url + "voiture/add";

    const { cause, solution, prix } = { ...reparationdetails };

    const data = {
      reparations: {
        cause: cause,
        solution: solution,
        prix: prix,
      },
      reparation_id: reperation_id,
    };

    const body = {
      data: data,
    };

    return this.http.post(url, body).pipe(
      tap(() => {
        this._refresh.next();
      })
    );
  }

  paiementAvalider() {}
}
