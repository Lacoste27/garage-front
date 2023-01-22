import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/theme/toast/toast.service';
import { AuthentificationService } from './authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(
    public authService: AuthentificationService,
    private toast: ToastService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.toast.ShowError("Connexion", "Il faut d'abord s'authentifier");
      this.router.navigateByUrl("/auth/client/signin")
    }
    return true;
  }
}
