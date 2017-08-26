import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Router }            from '@angular/router';
import { Location }                 from '@angular/common';
import { BooksService } from './books.service';
import { Book } from './book';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls : [ './book-details.component.css' ]
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  newBook: Boolean = false;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.booksService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  newChapter() {
    this.router.navigate(['/books', this.book.id, 'newChapter']);
  }
}
