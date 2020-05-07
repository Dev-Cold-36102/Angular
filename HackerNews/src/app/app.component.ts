import {Component, ViewChild} from '@angular/core';
import {Article} from './Article';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient) {
    this.getNewsFromAPI();
  }

  articles: Article[] = [];

  getNewsFromAPI() {
    this.httpClient
      .get<Article[]>('https://api.hnpwa.com/v0/news/1.json')
      .subscribe((newsItems) => {
        this.articles = newsItems;
      });
  }

  edit(article:Article){
    
  }
}
