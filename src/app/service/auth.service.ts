import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

interface Token {
  id: number;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  setToken(username: string, password: string): Observable<Token> {
    const url = environment.apiUrl + '/login';
    return this.http.post<Token>(url, null, {
      headers: {
        "Authorization": "Basic " + btoa(username + ":" + password)
      }
    }).pipe(
      tap((newToken: Token) => {
        // Use cookie for store token because localStorage can't be subdomain shared
        // localStorage.token = newToken.token;
        // localStorage.userId = newToken.id;
        this.setCookie("token", newToken.token, 3600);
        this.setCookie("userId", newToken.id, 3600);
      }),
      catchError(this.handleError)
    );
  }

  getToken() {
    // Use cookie for store token because localStorage can't be subdomain shared
    // return localStorage.token;
    return this.getCookie("token");
  }

  delToken() {
    // Use cookie for store token because localStorage can't be subdomain shared
    // localStorage.removeItem("userid");
    // localStorage.removeItem("token");
    this.setCookie("token", null, 0);
    this.setCookie("userId", null, 0);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('Unknown error' + error.error.message);
    }
    if (!error.status) return throwError(`Server connexion error : ${error.statusText}`);
    if (error.status == 403)
      return throwError(`${error.error.msg} because ${error.error.detail}`);
    return throwError(`${error.error.msg}`);
  }

  private setCookie(name, value, age) {
    document.cookie=`${name}=${value};max-age=${age};domain=${environment.domain}${environment.production? ';secure' : ''}`;
  }

  private getCookie(name) {
    name += "=";
    let ca = decodeURIComponent(document.cookie).split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);

      if (c.indexOf(name) == 0)
        return c.substring(name.length, c.length);
    }
    return "";
  }
}
