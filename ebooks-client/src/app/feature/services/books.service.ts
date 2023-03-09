import { Injectable } from '@angular/core';
import { HttpAdapter } from '../../core/adapters/http.adapter';
import { Books } from '../interfaces/books.interface';
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review.interface';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpAdapter: HttpAdapter) {}

  getBooks(url: string): Observable<Books> {
    return this.httpAdapter.get<Books>(url);
  }

  sendValoration(url: string , body : Review){
    this.httpAdapter.post(url , body).subscribe({
      next : ((values) => {
        console.log(values);
      })
    })
  }
}
