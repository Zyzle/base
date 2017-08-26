import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnippetsMainPageComponent } from './snippets-main-page/snippets-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: SnippetsMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetsRoutingModule { }
