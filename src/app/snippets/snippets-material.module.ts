import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MdIconModule, MdPaginatorModule, MdSortModule, MdTableModule, MdTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CdkTableModule,
    MdIconModule,
    MdPaginatorModule,
    MdSortModule,
    MdTableModule,
    MdTooltipModule
  ],
  exports: [
    CdkTableModule,
    MdIconModule,
    MdPaginatorModule,
    MdSortModule,
    MdTableModule,
    MdTooltipModule
  ]
})
export class SnippetsMaterialModule { }
