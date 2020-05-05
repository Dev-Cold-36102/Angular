import {Component, ViewChild} from '@angular/core';
import { NewsComponent } from '../app/news/news.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NewsComponent)
  news: NewsComponent;
  title = 'HackerNews';
  addArticle() {
    const arr = {
      title: (document.getElementById('new-title') as HTMLInputElement).value,
      url: (document.getElementById('new-url') as HTMLInputElement).value,
      likes:0
    };
    this.news.articles.push(arr);
  }
}
