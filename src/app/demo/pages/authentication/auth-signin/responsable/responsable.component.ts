import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IResponse } from 'src/app/demo/interfaces/interface';
import { AuthentificationService } from 'src/app/demo/services/authentification/authentification.service';
import { TokenService } from 'src/app/demo/services/jwt/token.service';
import { NavigationItem } from 'src/app/theme/layout/admin/navigation/navigation';

@Component({
  selector: 'app-responsable',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.scss']
})
export class ResponsableComponent {
  loading: boolean = false;
  erreur: boolean = false;
  form: FormGroup;
  private login: string = "atelier@email.com";
  private password: string = "passwords";

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private token: TokenService,
    private navigation: NavigationItem
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
      console.log(response);

      this.loading = false;
      if (response.success) {
        this.token.SetToken(response.data.token);
        this.navigation.set();
        this.router.navigateByUrl("/dashboard");
      }
    });
  }
}