import {Injectable} from '@angular/core';
import {Article} from './Article';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchArticleService {
  private articles: Article[] = [];

  constructor(private  httpClient: HttpClient) {
    this.getNewsFromAPI();
  }

  getNewsFromAPI() {
    this.httpClient
      .get<Article[]>('http://localhost:8080/home')
      .subscribe((newsItems) => {
        this.articles = newsItems;
      });
  }

  getAllNews() {
    return this.articles;
  }

  searchArticleByTitle(keySearch: string): Article[] {
    const result = this.articles.filter(item => item.title.includes(keySearch));
    return result;
  }
}
