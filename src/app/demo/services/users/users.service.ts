import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IVoiture } from '../../interfaces/interface';
import { AuthentificationService } from '../authentification/authentification.service';
import { TokenService } from '../jwt/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private base_url = "https://back-m1p10mean.onrender.com/users/";
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient, private router: Router, private authService: AuthentificationService) { }

  listVoitures() {
    let urlListVoiture = this.base_url + 'voitures';
    this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.get(urlListVoiture, { headers: this.headers });
  }

  ajouterVoiture(voiture: IVoiture) {
    let urlAddVoiture = this.base_url + 'voitures';
    this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    return this.http.post(urlAddVoiture, voiture, { headers: this.headers });
  }
}
