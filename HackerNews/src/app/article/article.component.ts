import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('article') newsArticle: Article;
  @Output() onclickShowUrl = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getLink() {
    this.onclickShowUrl.emit('you can read at ' + this.newsArticle.url);
  }

}
