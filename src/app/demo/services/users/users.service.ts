import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, tap } from "rxjs";
import { IVoiture, Paiement } from "../../interfaces/interface";
import { AuthentificationService } from "../authentification/authentification.service";
import { TokenService } from "../jwt/token.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private base_url = "https://back-m1p10mean.onrender.com/users/";

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthentificationService
  ) {}

  private _refresh = new Subject<void>();

  get Refresh() {
    return this._refresh;
  }

  listVoitures() {
    let urlListVoiture = this.base_url + "voitures";
    return this.http.get(urlListVoiture);
  }

  ajouterVoiture(voiture: IVoiture) {
    let urlAddVoiture = this.base_url + "voitures";
    return this.http.post(urlAddVoiture, voiture);
  }

  deposerVoiture(numeroVoiture: string) {
    let urlDeposerVoiture = this.base_url + numeroVoiture + "/depot";
    return this.http.get(urlDeposerVoiture);
  }

  listReparations() {
    let urlListReparation = this.base_url + "reparations";
    return this.http.get(urlListReparation);
  }

  payerReparation(paiement: Paiement, reparation_id: string) {
    let urlReparationVoiture = this.base_url + "reparations/paiement";
    return this.http.post(urlReparationVoiture, {
      data: { paiement: paiement, reparation_id: reparation_id },
    });
  }

  recupererVoiture(reparation_id: string) {
    const url = this.base_url + "recuperation";
    return this.http.post(url, { data: { reparation_id: reparation_id } }).pipe(
      tap(() => {
        this._refresh.next();
      })
    );
  }
}
