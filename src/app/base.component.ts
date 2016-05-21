import { Component } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'

@Component({
  moduleId: module.id,
  selector: 'base-app',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MdButton
  ],
  providers: [MdIconRegistry]
})
export class BaseAppComponent {

}
