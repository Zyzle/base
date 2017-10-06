import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CdkTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [
    CdkTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class SnippetsMaterialModule { }
