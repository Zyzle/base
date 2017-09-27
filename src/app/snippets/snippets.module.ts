import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SnippetsMaterialModule } from './snippets-material.module';
import { LanguagesEffects } from './languages.effects';
import { SnippetsRoutingModule } from './snippets-routing.module';
import { SnippetsMainPageComponent } from './snippets-main-page/snippets-main-page.component';
import { snippetsReducer } from './snippets.reducers';
import { LanguagesListComponent } from './languages-list/languages-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('snippets', snippetsReducer),
    EffectsModule.forFeature([
      LanguagesEffects
    ]),
    SnippetsRoutingModule,
    SnippetsMaterialModule
  ],
  declarations: [SnippetsMainPageComponent, LanguagesListComponent],
  providers: [
    // LanguagesService
  ]
})
export class SnippetsModule { }
