import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BooksService } from './books.service';
import { Book } from './book';
import { ChaptersService } from './chapters.service';
import { ChapterContent } from './chapterContent';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'chapter-add',
  templateUrl: './chapter-add.component.html',
  styleUrls : [ './chapter-add.component.css' ]
})

export class ChapterAddComponent implements OnInit {
  chapterContent: ChapterContent;
  displayedContent: String;

  constructor(
    private booksService: BooksService,
    private chaptersService: ChaptersService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.chapterContent = new ChapterContent();
        this.chapterContent.chapter.bookId = params['id'];
      });
  }

  createChapter() {
    this.chaptersService.create(this.chapterContent)
      .then(() => this.location.back());
  }
}
