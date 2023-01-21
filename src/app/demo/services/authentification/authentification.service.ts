import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IUser, IUserRequest } from "../../interfaces/interface";
import { TokenService } from "../jwt/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthentificationService {
  private base_url = "https://back-m1p10mean.onrender.com/";
  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(
    private http: HttpClient,
    private router: Router,
    private token: TokenService
  ) {}

  login(email: string, password: string, role: string) {
    const data = {
      email: email,
      password: password,
    };

    switch (role) {
      case "client":
        return this.http.post(this.base_url + "users/login", data);
      default:
        return this.http.post(this.base_url + "responsables/login", data);
    }
  }

  logout() {
    const user: any = this.token.GetUser();
    
    if (user.role == "client") {
      this.router.navigateByUrl("/auth/client/signin");
    } else if(user.role == "atelier" || user.role == "financier") {
      this.router.navigateByUrl("/auth/responsable/signin");
    }
    this.token.Clear();
  }

  signUp(user: IUserRequest): Observable<any> {
    let api = `${this.base_url}users/signup`;
    return this.http.post(api, user);
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }
}
