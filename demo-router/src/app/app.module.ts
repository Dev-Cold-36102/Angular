import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {RouterModule} from '@angular/router';
import {ListArticleComponent} from './list-article/list-article.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavComponent,
    CreateArticleComponent,
    EditArticleComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent,
    ListArticleComponent
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
