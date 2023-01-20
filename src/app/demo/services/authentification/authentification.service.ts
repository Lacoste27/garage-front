import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "../../interfaces/interface";
import { TokenService } from "../jwt/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  private base_url = "https://back-m1p10mean.onrender.com/users/";
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient, private router: Router, private token: TokenService) {}

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password,
    };
    return this.http.post(this.base_url + "login", data);
  }

  logout() {
    this.token.Clear();
    this.router.navigateByUrl("/auth/signin");
  }

  signUp(user: IUser): Observable<any> {
    let api = `${this.base_url}/signup`;
    return this.http.post(api, user);
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
