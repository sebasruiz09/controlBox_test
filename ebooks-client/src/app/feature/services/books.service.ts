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

  sendValoration(url: string , body : Review) : Observable<any>{
    return this.httpAdapter.post(url , body);
  }

  getReviews(url : string) : Observable<any> {
    return this.httpAdapter.get(url);
  }
}
