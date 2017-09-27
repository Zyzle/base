import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MdIconModule, MdPaginatorModule, MdSortModule, MdTableModule } from '@angular/material';

@NgModule({
  imports: [
    CdkTableModule,
    MdIconModule,
    MdPaginatorModule,
    MdSortModule,
    MdTableModule
  ],
  exports: [
    CdkTableModule,
    MdIconModule,
    MdPaginatorModule,
    MdSortModule,
    MdTableModule
  ]
})
export class SnippetsMaterialModule { }
