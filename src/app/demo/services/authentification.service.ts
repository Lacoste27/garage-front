import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private loginurl = "https://back-m1p10mean.onrender.com/users/login";
  constructor(private http: HttpClient) { }

  login(email: string, password:string){
    const data = {  
      email: email,
      password: password
    }  
    return this.http.post(this.loginurl,data);
  }
}
