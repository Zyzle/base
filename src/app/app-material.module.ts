import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdInputModule, MdListModule, MdSidenavModule,
  MdToolbarModule, MdTooltipModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule
  ]
})
export class AppMaterialModule { }
