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

    console.log(data);

    const url = this.base_url+"reception";

    return this.http.post(url,data);
  }
}
