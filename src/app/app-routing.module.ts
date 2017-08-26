import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'snippets',
    loadChildren: 'app/snippets/snippets.module#SnippetsModule'
  },
  {
    path: 'bookmarks',
    loadChildren: 'app/bookmarks/bookmarks.module#BookmarksModule'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
