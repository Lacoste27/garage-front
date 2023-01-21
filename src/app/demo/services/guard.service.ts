import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(
    public authService: AuthentificationService,
    public router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigateByUrl("/auth/client/signin")
    }
    return true;
  }
}
