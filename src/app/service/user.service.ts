import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Globals } from '../globals';
import { AuthService } from '../service/auth.service';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public globals: Globals,
    private http: HttpClient
  ) { }

  createUser(username: string, password: string) {
    const url = `${this.globals.apiUrl}/register`;
    return this.http.post<User>(url, {
      username: username,
      password: password,
      lang: navigator.language
    }).pipe(
      catchError(this.handleError)
    );
  }

  getUser(): Observable<User> {
    const url = `${this.globals.apiUrl}/users/info`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('Unknown error' + error.error.message);
    }
    if (error.status == 400)
      return throwError(`${error.error.msg} because ${error.error.errors}`);
    return throwError(`${error.error.msg}`);
  }
}
