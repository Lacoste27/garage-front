import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../jwt/token.service';

@Injectable({
  providedIn: 'root'
})
export class PaiementsService {
  private base_url = "http://localhost:3000/paiements/";

  constructor(private http: HttpClient, private token: TokenService) { }

  getAll(){return this.http.get(this.base_url+"liste")}

  valider(paiement_id:string){
    const {nom, prenom, email} = this.token.GetUser();

    const body = {  
      "data":{
        "valideur":{
          "nom":nom,
          "prenom":prenom,
          "email":email
        },
        "paiement_id":paiement_id
      }
    }

    const url = this.base_url+"validation";

    return this.http.post(url, body);
  }
}
