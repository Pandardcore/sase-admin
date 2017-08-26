import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Book }                from './book';
import { BooksService }         from './books.service';
@Component({
  selector: 'my-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.css' ]
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(
    private booksService: BooksService,
    private router: Router) { }

  getBooks(): void {
    this.booksService
        .getBooks()
        .then(books => this.books = books);
  }

  deleteBook(id: number) {
    console.log("deleting book : " + id);
  }

  showBook(id: number) {
    this.router.navigate(['/books', id]);
  }

  newBook() {
    this.router.navigate(['/books/new']);
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
