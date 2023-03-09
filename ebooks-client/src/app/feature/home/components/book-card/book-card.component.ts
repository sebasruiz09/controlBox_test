import { Component, Input } from '@angular/core';
import { Item } from '../../../interfaces/books.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookModalComponent } from '../book-modal/book-modal.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  constructor(private ngModal: NgbModal) {}
  @Input() book?: Item;

  showModal = true;

  changeModal(): void {
    this.showModal ? (this.showModal = false) : (this.showModal = true);
    const modalRef = this.ngModal.open(BookModalComponent, {centered: true , size : "lg" });
    modalRef.componentInstance.book = this.book;
  }
}
