import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchBookService} from '../search-book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  keySearch = '';

  @Output() onCreateBook = new EventEmitter();
  @Output() onSearchByTitle = new EventEmitter<Book[]>();

  constructor(private searchByTitle: SearchBookService) {
  }

  ngOnInit() {
  }

  loadPage() {
    this.onCreateBook.emit();
  }

  // sendResult() {
  //   console.log(this.keySearch);
  //   if (this.keySearch === '') {
  //     this.onSearchByTitle.emit(this.searchByTitle.());
  //   } else {
  //     this.onSearchByTitle.emit(this.searchByTitle.searchArticleByTitle(this.keySearch));
  //   }
  // }

}
