import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/books.service';
import { Books } from '../interfaces/books.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly books: Record<string, string> = {
    'Most Popular books':
      'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=30',
    'Action Books':
      'https://www.googleapis.com/books/v1/volumes?q=subject:action&maxResults=30',
  };

  booksArray = Object.entries(this.books);
}
