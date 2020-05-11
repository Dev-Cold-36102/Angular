import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Article} from '../Article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  @Input() articleEdit: Article;
  @Output() onEditArticle = new EventEmitter();
  articleForm: FormGroup;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl(this.articleEdit.title, Validators.minLength(5)),
      url: new FormControl(this.articleEdit.url)
    });
  }

  onSave() {
    const article: Article = this.articleForm.value;
    this.editNews(article);
  }

  editNews(article: Article) {
    article.id = this.articleEdit.id;
    this.httpClient.post('http://localhost:8080/edit', article).subscribe((result) => {
      console.log('Sửa bài viết thành công');
      this.onEditArticle.emit();
    }, (error) => {
      console.log('lỗi khi Sửa bài viết');
      console.error(error);
    });

  }
}
