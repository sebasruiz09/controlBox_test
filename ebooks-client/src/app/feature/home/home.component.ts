import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/books.service';
import { Books } from '../interfaces/books.interface';
import { environment } from '../../../environment/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly BOOKS_URL : string = environment.BOOKS_URL;

  private readonly books: Record<string, string> = {
    'Most popular books':
      `${this.BOOKS_URL}subject:fiction&orderBy=newest&maxResults=30`,
    'Action and more action':
      `${this.BOOKS_URL}subject:action&maxResults=30`,
    'a little bit of history':
      `${this.BOOKS_URL}subject:history&maxResults=30`,
    'Rrecommended for you':
      `${this.BOOKS_URL}news:any&maxResults=30`,
    "Let's get to know our country":
      `${this.BOOKS_URL}Colombia:any&maxResults=30`,
  };

  booksArray: string[][] = Object.entries(this.books);
}
