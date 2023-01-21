import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { IResponse } from "src/app/demo/interfaces/interface";
import { AuthentificationService } from "src/app/demo/services/authentification/authentification.service";
import { TokenService } from "src/app/demo/services/jwt/token.service";
import { NavigationItem } from "src/app/theme/layout/admin/navigation/navigation";
import { SharedModule } from "src/app/theme/shared/shared.module";

@Component({
  selector: "app-responsable",
  standalone: true,
  imports: [CommonModule, RouterModule,SharedModule],
  templateUrl: "./responsable.component.html",
  styleUrls: ["./responsable.component.scss"],
})
export class ResponsableComponent implements OnInit {
  loading: boolean = false;
  erreur: boolean = false;
  submitted: boolean = true;

  form: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private token: TokenService,
    private navigation: NavigationItem
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  signin() {
    const value = this.form.value;
    this.loading = true;
    this.submitted = true;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }

    this.authService
      .login(value.email, value.password, "responsable")
      .subscribe({
        next: (result) => {
          const response: IResponse = result as IResponse;
          console.log(response);
          this.loading = false;
          if (response.success) {
            this.token.SetToken(response.data.token);
            this.navigation.set();
            this.router.navigateByUrl("/dashboard");
          } else {
            this.erreur = true;
            this.loading = false;
            return;
          }
        },
        error: (msg) => {
          this.erreur = true;
          this.loading = false;
          return;
        },
      });
  }
}
