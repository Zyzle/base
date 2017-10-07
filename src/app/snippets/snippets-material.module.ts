import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    CdkTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    CdkTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class SnippetsMaterialModule { }
