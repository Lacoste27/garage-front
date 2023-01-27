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
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ColorPickerModule } from "ngx-color-picker";
import { IResponse } from "src/app/demo/interfaces/interface";
import { AuthentificationService } from "src/app/demo/services/authentification/authentification.service";
import { TokenService } from "src/app/demo/services/jwt/token.service";
import { NavigationItem } from "src/app/theme/layout/admin/navigation/navigation";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ToastService } from "src/app/theme/toast/toast.service";

@Component({
  selector: "app-client",
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    ColorPickerModule,
    RouterModule,
  ],
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  loading: boolean = false;
  erreur: boolean = false;
  submitted: boolean = false;
  error_message: string = "";
  form: FormGroup = new FormGroup({
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

    this.authService.login(value.email, value.password, "client").subscribe({
      next: (result) => {
        const response: IResponse = result as IResponse;
        this.loading = false;
        if (response.success) {
          this.token.SetToken(response.data.token);
          this.navigation.set();
          this.router.navigateByUrl("/dashboard");
          this.toast.ShowSuccess("Bienvenue", "Vous êtes connectés");
        } else if(response.error){
          this.erreur = true;
          this.error_message = response.message.toString();
          this.loading = false;
          this.toast.ShowError("Erreur", response.message.toString());
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
