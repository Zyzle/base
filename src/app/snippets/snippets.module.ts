import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsMainPageComponent } from './snippets-main-page/snippets-main-page.component';

@NgModule({
  imports: [
    CommonModule,
    SnippetsRoutingModule
  ],
  declarations: [SnippetsMainPageComponent]
})
export class SnippetsModule { }
