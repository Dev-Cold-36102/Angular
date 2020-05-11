import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Article} from '../Article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  @Output() onCreateArticle = new EventEmitter();

  articleForm: FormGroup;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.minLength(5)),
      url: new FormControl()
    });
  }

  onSave() {
    const article: Article = this.articleForm.value;
    this.createNews(article);
  }

  createNews(article: Article) {
    this.httpClient.post('http://localhost:8080/home', article).subscribe((result) => {
      console.log('Thêm bài viết thành công');
      this.onCreateArticle.emit();
    }, (error) => {
      console.log('Gặp lỗi khi thêm bài viết');
      console.error(error);
    });

  }
}
