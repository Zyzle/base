import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookmarksMainPageComponent } from './bookmarks-main-page/bookmarks-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookmarksMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
