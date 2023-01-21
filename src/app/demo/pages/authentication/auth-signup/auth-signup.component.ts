import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthentificationService } from "src/app/demo/services/authentification/authentification.service";
import { TokenService } from "src/app/demo/services/jwt/token.service";
import { NavigationItem } from "src/app/theme/layout/admin/navigation/navigation";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";
import {
  IResponse,
  IUser,
  IUserRequest,
} from "src/app/demo/interfaces/interface";

@Component({
  selector: "app-auth-signup",
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: "./auth-signup.component.html",
  styleUrls: ["./auth-signup.component.scss"],
})
export default class AuthSignupComponent implements OnInit {
  loading: boolean = false;
  erreur: boolean = false;
  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    nom: new FormControl(""),
    prenom: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(
    private authService: AuthentificationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private token: TokenService,
    private navigation: NavigationItem,
    private toast: ToastService
  ) {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;

    const value = this.form.value;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }

    const user: IUserRequest = {
      nom: value.nom,
      prenom: value.prenom,
      email: value.email,
      password: value.password,
    };

    this.authService.signUp(user).subscribe({
      next: (result) => {
        const response: IResponse = result as IResponse;
        if (response.success) {
          this.toast.ShowSuccess("Inscription !", response.message.toString());
          this.token.SetToken(response.data.token);
          this.navigation.set();
          this.router.navigateByUrl("/dashboard");
          this.loading = false;
        } else if (response.error) {
          this.loading = false;
          this.toast.ShowError("Erreur !", response.message.toString());
        }
      },
      error: (error) => {
        this.loading = false;
        this.toast.ShowError("Erreur", "Une erreur s'est produite");
      },
    });
  }
}
