import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksMainPageComponent } from './bookmarks-main-page/bookmarks-main-page.component';
import { bookmarksReducer } from './bookmarks.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmarks', bookmarksReducer),
    BookmarksRoutingModule
  ],
  declarations: [BookmarksMainPageComponent]
})
export class BookmarksModule { }
