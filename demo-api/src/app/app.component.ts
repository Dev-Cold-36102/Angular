import {Component, ViewChild} from '@angular/core';
import {Article} from './Article';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SearchService} from './search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[] = [];


  constructor(private  httpClient: HttpClient, private searchService: SearchService) {
    this.getNewsFromAPI();
  }


  getNewsFromAPI() {
    this.httpClient
      .get<Article[]>('http://localhost:8080/home')
      .subscribe((newsItems) => {
        this.articles = newsItems;
      });
  }

  searchByTilte(event: Article[]) {
    this.articles = event;
  }
}
