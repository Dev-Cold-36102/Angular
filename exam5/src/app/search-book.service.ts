import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Book} from './Book';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {
  book: BehaviorSubject<Book> = new BehaviorSubject<Book>(new class implements Book {
    author: string;
    description: string;
    id: number;
    title: string;
  }());

  constructor() { }

  get() {
    return this.book;
  }

  set(book: Book) {
    this.book.next(book);
  }
}
