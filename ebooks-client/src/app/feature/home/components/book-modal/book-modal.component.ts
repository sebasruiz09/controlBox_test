import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ModalDirective } from 'ngx-bootstrap/modal';
import { Item } from 'src/app/feature/interfaces/books.interface';
import { BookService } from '../../../services/books.service';
import { Review } from '../../../interfaces/review.interface';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly bookService: BookService
  ) {}

  private readonly BOOKS_URL : string = `${environment.API_URL}books/review`;


  @ViewChild('myModal') public myModal?: ModalDirective;
  @Input() public showModal?: boolean;
  @Input() book?: Item;

  public hide(): void {
    this.myModal?.hide();
  }  

  bookForm!: FormGroup;

  ngOnInit(): void {
    this.buildFrom();
  }

  buildFrom(): void {
    this.bookForm = this.fb.group({
      review: ['', Validators.required ],
    });
  }

  sendBookReview() : void {
    const info = this.book?.volumeInfo;

    const book : Review = {
      user : sessionStorage.getItem("id"),
      id : this.book?.id,
      title : info?.title,
      author : info?.authors[0],
      description : info?.description,
      review : this.bookForm.value["review"],
    }
    this.bookService.sendValoration(this.BOOKS_URL , book);
  }
}
