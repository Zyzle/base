import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksMainPageComponent } from './bookmarks-main-page/bookmarks-main-page.component';

@NgModule({
  imports: [
    CommonModule,
    BookmarksRoutingModule
  ],
  declarations: [BookmarksMainPageComponent]
})
export class BookmarksModule { }
