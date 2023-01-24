import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor() {}

  SetToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  GetToken() {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      return localStorage.getItem("access_token");
    } else {
      return null;
    }
  }

  GetUser():any {
    const token = this.GetToken();
    if (token) {
      const user = jwtDecode(token);
      return user;
    } else {
      return null;
    }
  }

  Clear() {
    localStorage.clear();
  }
}
