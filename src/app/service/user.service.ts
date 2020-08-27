import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(username: string, password: string) {
    const url = environment.apiUrl + '/register';
    return this.http.post<User>(url, {
      username: username,
      password: password,
      lang: navigator.language
    }).pipe(
      catchError(this.handleError)
    );
  }

  getUser(): Observable<User> {
    const url = environment.apiUrl + '/users/info';
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('Unknown error' + error.error.message);
    }
    if (!error.status) return throwError(`Server connexion error : ${error.statusText}`);
    if (error.status == 400)
      return throwError(`${error.error.msg} because ${error.error.errors}`);
    return throwError(`${error.error.msg}`);
  }
}
