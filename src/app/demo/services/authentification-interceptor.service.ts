import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthentificationService } from "./authentification/authentification.service";
import { TokenService } from "./jwt/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthentificationInterceptorService implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.tokenService.GetToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken,
      },
    });
    return next.handle(request);
  }
}
