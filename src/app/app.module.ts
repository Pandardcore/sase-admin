import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CKEditorModule } from 'ng2-ckeditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { BooksComponent }  from './books.component';
import { BookDetailsComponent } from './book-details.component';
import { BookAddComponent } from './book-add.component';
import { ChapterAddComponent } from './chapter-add.component';

import { BooksService }  from './books.service';
import { ChaptersService }  from './chapters.service';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CKEditorModule
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    BookAddComponent,
    ChapterAddComponent
  ],
  providers: [
    BooksService,
    ChaptersService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
