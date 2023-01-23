import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private base_url = "https://back-m1p10mean.onrender.com/reparations/";

  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthentificationService) { }

  listRepartionOfVoiture(numero: string) {
    let urlReparationOfVoiture = this.base_url + numero + '/historique';
    return this.http.get(urlReparationOfVoiture);
  }
}
