import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../Book';
import {SearchBookService} from '../search-book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: Book[] = [];


  constructor(private  httpClient: HttpClient, private searchBookService: SearchBookService) {
    this.getBooksFromAPI();
  }

  getBooksFromAPI() {
    this.httpClient
      .get<Book[]>('http://localhost:3000/books')
      .subscribe((newsItems) => {
        this.books = newsItems;
      });
  }

  searchByTilte(event: Book[]) {
    this.books = event;
  }


  ngOnInit(): void {
  }

}

