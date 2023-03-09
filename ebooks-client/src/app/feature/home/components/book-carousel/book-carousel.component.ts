import { Component, Input, OnInit } from '@angular/core';
import { Books } from 'src/app/feature/interfaces/books.interface';
import { BookService } from 'src/app/feature/services/books.service';
import { Item } from '../../../interfaces/books.interface';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.scss'],
})
export class BookCarouselComponent implements OnInit {
  constructor(private bookService: BookService) {}

  books!: Item[];

  actions!: Item[];
  
  @Input() title! : any;

  @Input() URL!: any;

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this.bookService
      .getBooks(
        this.URL
      )
      .subscribe({
        next: (values: Books) => {
          this.books = values.items;
        },
      });
  }
}
