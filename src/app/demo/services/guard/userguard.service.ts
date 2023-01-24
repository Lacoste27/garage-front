import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { ToastService } from "src/app/theme/toast/toast.service";
import { AuthentificationService } from "../authentification/authentification.service";
import { TokenService } from "../jwt/token.service";

@Injectable({
  providedIn: 'root'
})
export class UserguardService {
  constructor(
    public authService: AuthentificationService,
    private token: TokenService,
    private toast: ToastService,
    public router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      if(!(this.token.GetUser().role === "client")){  
        this.toast.ShowError("Non authorizé", "Vous ne pouvez pas y accedez");
        return this.router.navigateByUrl("/dashboard");
      }
    }
    return true;
  }
}
