import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ListBookComponent } from './list-book/list-book.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookEditComponent } from './edit-book/book-edit.component';
import {NavComponent} from './nav/nav.component';
import {CreateBookComponent} from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailBookComponent } from './detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ListBookComponent,
    BookEditComponent,
    NavComponent,
    CreateBookComponent,
    DeleteBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
