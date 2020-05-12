import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Book} from '../Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  @Output() onCreateBook = new EventEmitter();

  bookForm: FormGroup;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.minLength(5)),
      author: new FormControl(),
      description: new FormControl()
    });
  }

  onSave() {
    const book: Book = this.bookForm.value;
    this.createBook(book);
  }

  createBook(book: Book) {
    this.httpClient.post('http://localhost:3000/books', book).subscribe((result) => {
      console.log('Thêm book thành công');
      this.onCreateBook.emit();
    }, (error) => {
      console.log('Gặp lỗi khi thêm book');
      console.error(error);
    });

  }

  aleart() {
    alert('ADD SUCCSESS!');
  }
}
