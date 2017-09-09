import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'snippets',
    canLoad: [AuthGuard],
    loadChildren: 'app/snippets/snippets.module#SnippetsModule'
  },
  {
    path: 'bookmarks',
    canLoad: [AuthGuard],
    loadChildren: 'app/bookmarks/bookmarks.module#BookmarksModule'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
