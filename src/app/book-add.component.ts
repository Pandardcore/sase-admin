import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BooksService } from './books.service';
import { Book } from './book';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book-add',
  templateUrl: './book-details.component.html',
  styleUrls : [ './book-details.component.css' ]
})
export class BookAddComponent implements OnInit {
  book: Book;
  newBook: Boolean = true;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.book = new Book();
    this.book.author = 'Sébastien Desbarres';
  }

  createBook() {
    this.booksService.create(this.book)
      .then(() => this.location.back());
  }
}
