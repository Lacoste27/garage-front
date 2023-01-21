import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { AuthentificationService } from "src/app/demo/services/authentification/authentification.service";
import { IResponse } from "src/app/demo/interfaces/interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenService } from "src/app/demo/services/jwt/token.service";

@Component({
  selector: "app-auth-signin",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./auth-signin.component.html",
  styleUrls: ["./auth-signin.component.scss"],
})
export default class AuthSigninComponent {
  loading: boolean = false;
  erreur: boolean = false;
  form: FormGroup;
  private login: string = "yroist@email.com";
  private password: string = "passwords";

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private token: TokenService
  ) {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  signin() {
    const value = this.form.value;
    this.loading = true;

    this.authService.login(this.login, this.password, 'responsable').subscribe((result) => {
      const response: IResponse = result as IResponse;
      this.loading = false;
      if (response.success) {
        this.token.SetToken(response.data.token);
        this.router.navigateByUrl("/dashboard");
      }
    });
  }
}
