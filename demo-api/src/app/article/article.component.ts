import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../Article';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('article') newsArticle: Article;
  @Output() onclickShowUrl = new EventEmitter<string>();
  @Output() onclickSave = new EventEmitter();


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  loadPage() {
    this.onclickSave.emit();
  }

  submitDelete(id) {
    if (confirm('Are you sure?')) {
      this.deleteArticle(id);
    }
  }

  deleteArticle(id) {
    this.httpClient.post('http://localhost:8080/delete', id).subscribe((result) => {
      console.log('Xóa bài viết thành công');
      this.onclickSave.emit();
    }, (error) => {
      console.log('Gặp lỗi khi xóa bài viết');
      console.error(error);
    });
  }

}
