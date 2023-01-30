import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "../jwt/token.service";

@Injectable({
  providedIn: "root",
})
export class AtelierService {
  private base_url =
    "https://back-m1p10mean.onrender.com/responsables/atelier/";

  constructor(private token: TokenService, private http: HttpClient) {}

  reception(reparation_id: string) {
    const reparateur = this.token.GetUser();

    const data = {
      reparateur: reparateur,
      reparation_id: reparation_id,
    };

    const body = {
      data: data,
    };

    const url = this.base_url + "reception";

    return this.http.post(url, body);
  }

  bonsortie(reparation_id: string) {
    const url = this.base_url + "valider";
    const user = this.token.GetUser();
    return this.http.post(url, {
      data: {
        valideur: user,
        reparation_id: reparation_id,
      },
    });
  }
}
