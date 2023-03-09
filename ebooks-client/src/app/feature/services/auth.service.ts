import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpAdapter } from 'src/app/core/adapters/http.adapter';
import { environment } from 'src/environment/environment';
import { User } from '../interfaces';
import { HttpResponse, signinResponse } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'platform',
})
export class AuthService {
  constructor(private httpAdapter: HttpAdapter, private route: Router) {}

  private readonly URL: string = `${environment.API_URL}auth/`;

  readonly isloggedIn = (): boolean => sessionStorage.getItem('token') !== null;

  signup(user: User): void {
    this.httpAdapter.post<HttpResponse>(`${this.URL}signup`, user).subscribe({
      next: (response) => {
        response.status === 200 ? this.route.navigate(['/signin']) : null;
      },
    });
  }

  signIn(credentials: Pick<User, 'email' | 'password'>) {
    this.httpAdapter
      .post<signinResponse>(`${this.URL}signin`, credentials)
      .subscribe({
        next: (response) => {
          if (response.token) {
            window.sessionStorage.setItem('token', response['token']);
            this.route.navigate(['/home']);
          }
        },
      });
  }
}
