import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { CharactersComponent }  from './characters.component';
import { BooksComponent }  from './books.component';
import { BookDetailsComponent } from './book-details.component';
import { BookAddComponent } from './book-add.component';
import { ChapterAddComponent } from './chapter-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'books/new', component: BookAddComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'books/:id/newChapter', component: ChapterAddComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
