import { Injectable } from '@angular/core';
import { HttpAdapter } from 'src/app/core/adapters/http.adapter';
import { environment } from 'src/environment/environment';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'platform',
})
export class AuthService {
  constructor(private httpAdapter: HttpAdapter) {}

  private readonly URL: string = `${environment.API_URL}auth/signup`;

  signup(user: User): void {
    this.httpAdapter.post<Response>(this.URL, user).subscribe({
        next : ((response) => {
            console.log(response);
        })
    })
  }
}   
