import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { Item2Component } from './item2/item2.component';
import { WordComponent } from './word/word.component';
import {FormsModule} from "@angular/forms";
import { PersionComponent } from './persion/persion.component';
import {ParentComponent} from "./parent.component";
import {ChildComponent} from "./child.component";
import {CardComponent} from "./card.component";
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    Item2Component,
    WordComponent,
    PersionComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
