import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Discord } from '../class/discord';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(
    private http: HttpClient
  ) { }

  linkDiscordAccount(code: string) {
    const url = environment.apiUrl + '/users/discord';
    return this.http.post<Discord>(url, {
      code: code
    }).pipe(
      catchError(this.handleError)
    );
  }

  unlinkDiscordAccount() {
    const url = environment.apiUrl + '/users/discord';
    return this.http.delete<Discord>(url).pipe(
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
