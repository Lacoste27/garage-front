import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ReparationService {
  private base_url = "https://back-m1p10mean.onrender.com/reparations/";
  private headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient, private router: Router, private authService: AuthentificationService) { }

  detailReparation(idreparation: string) {
    let urlDetailReparation = this.base_url + idreparation + '/detail';
    this.headers.set('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    console.log("Id reperation : " + idreparation);
    return this.http.get(urlDetailReparation, { headers: this.headers });
  }
}
