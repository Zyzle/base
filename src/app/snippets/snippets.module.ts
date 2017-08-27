import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsMainPageComponent } from './snippets-main-page/snippets-main-page.component';
import { snippetsReducer } from './snippets.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('snippets', snippetsReducer),
    SnippetsRoutingModule
  ],
  declarations: [SnippetsMainPageComponent]
})
export class SnippetsModule { }
