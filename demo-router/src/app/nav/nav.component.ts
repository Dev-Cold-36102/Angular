import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchArticleService} from '../search-article.service';
import {Article} from '../Article';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  keySearch = '';

  @Output() onCreateArticle = new EventEmitter();
  @Output() onSearchByTitle = new EventEmitter<Article[]>();

  constructor(private searchByTitle: SearchArticleService) {
  }

  ngOnInit(){
  }

  loadPage() {
    this.onCreateArticle.emit();
  }

  sendResult() {
    console.log(this.keySearch);
    if (this.keySearch === '') {
      this.onSearchByTitle.emit(this.searchByTitle.getAllNews());
    } else {
      this.onSearchByTitle.emit(this.searchByTitle.searchArticleByTitle(this.keySearch));
    }
  }

}
