import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/books.service';
import { Books } from '../interfaces/books.interface';
import { environment } from '../../../environment/environment.prod';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs';
import { HttpAdapter } from '../../core/adapters/http.adapter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  private readonly BOOKS_URL: string = environment.BOOKS_URL;

  private readonly books: Record<string, string> = {
    'Most popular books': `${this.BOOKS_URL}subject:fiction&orderBy=newest&maxResults=30`,
    'Action and more action': `${this.BOOKS_URL}subject:action&maxResults=30`,
    'a little bit of history': `${this.BOOKS_URL}subject:history&maxResults=30`,
    'Rrecommended for you': `${this.BOOKS_URL}news:any&maxResults=30`,
    "Let's get to know our country": `${this.BOOKS_URL}Colombia:any&maxResults=30`,
  };

  search?: string[];

  booksArray: string[][] = Object.entries(this.books);

  findForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();

    this.findForm.valueChanges
      .pipe(
        map(({ search }) => ({ search, valid: search.length > 4 })),
        debounceTime(300)
      )
      .subscribe({
        next: ({ search, valid }) => {
          console.log(search , valid);
          if (valid) this.getData(search);
          this.showSearch = valid;
        },
      });
  }

  showSearch: boolean = false;

  buildForm(): void {
    this.findForm = this.fb.group({
      search: [''],
    });
  }

  getData(query: string): void {
    this.search = [];
    if (query)
      this.search = [
        'From your search',
        `${this.BOOKS_URL}${query}&maxResults=30`,
      ];
  }
}
