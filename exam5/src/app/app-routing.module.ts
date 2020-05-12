import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';
// import {DeleteBookComponent} from './delete-book/delete-book.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'add',
    component: CreateBookComponent,
  },
  {
    path: '',
    component: ListBookComponent
  },
  {
    path: 'detail',
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
