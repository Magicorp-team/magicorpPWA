import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken()

    // Add Bearer Authorization token if Authorization not set and request for api.magicorp.fr
    if (token && !request.headers.get("Authorization") && /^(?:https?:\/\/)?(api.magicorp.fr)\/*/.test(request.url))
      return next.handle(request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token)
      }));

    return next.handle(request);
  }
}
