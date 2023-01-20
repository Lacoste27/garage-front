import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  SetToken(token: string){  
    localStorage.setItem('access_token', token);
    console.log(this.GetUser());
  }

  GetToken() {
    return localStorage.getItem('access_token');
  }

  GetUser(){  
    return jwtDecode(this.GetToken())
  }

  Clear(){  
    localStorage.clear();
  }
}
