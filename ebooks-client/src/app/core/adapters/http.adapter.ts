import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpAdapter {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers: headers }).pipe(
      map((response) => response as T),
      catchError(this.handleError)
    );
  }

  public post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers: headers }).pipe(
      map((response) => response as T),
      catchError(this.handleError)
    );
  }

  private handleError = (error: HttpErrorResponse) =>
    throwError(
      error.error instanceof ErrorEvent
        ? `Error: ${error.error.message}`
        : error.error instanceof ProgressEvent
        ? 'Network error!'
        : `Error Code: ${error.status}\nMessage: ${error.message}`
    );
}
