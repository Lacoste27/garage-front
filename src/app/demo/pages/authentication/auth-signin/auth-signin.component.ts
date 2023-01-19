import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthentificationService } from 'src/app/demo/services/authentification.service';

@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export default class AuthSigninComponent {

  private loading : boolean =false;
  private login: string = "yroist@email.com"
  private password: string  = "passwords";

  constructor(private authService: AuthentificationService){  

  }

  signin(){  
    this.authService.login(this.login,this.password).subscribe((result) => {
      console.log(result);
    })
  }
}
