import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { DetailsReparations } from "../../interfaces/interface";
import { AuthentificationService } from "../authentification/authentification.service";

@Injectable({
  providedIn: "root",
})
export class ReparationService {
  private base_url = "https://back-m1p10mean.onrender.com/reparations/";
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
  ) {}

  detailReparation(idreparation: string) {
    let urlDetailReparation = this.base_url + idreparation + "/detail";
    return this.http.get(urlDetailReparation, { headers: this.headers });
  }

  listeReparation(etat: string){  
    const url = this.base_url +"liste?etat="+etat;
    const parameter: HttpParams = new HttpParams();

    parameter.set("etat",etat);

    return this.http.get(url);
  }

  addReparationDetails(reperation_id: string, reparationdetails: DetailsReparations){
    const url = this.base_url+"voiture/add";

    const {cause, solution, prix} = {...reparationdetails};

    const data = {  
      reparations : {  
        "cause" : cause,
        "solution":solution,
        "prix":prix
      },
      "reparation_id": reperation_id
    }

    const body = {
      "data": data
    }

    return this.http.post(url, body);

  }
}
