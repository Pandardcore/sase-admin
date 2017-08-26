import { Chapter } from './chapter';

export class ChapterContent {
  chapter: Chapter;
  content: String;

  constructor() {
    this.chapter = new Chapter();
  }
}
