import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';


import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { FbtestComponent } from './+fbtest';

import { AuthComponent } from './auth';

@Component({
  moduleId: module.id,
  selector: 'base-app',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MdButton,
    AuthComponent
  ],
  providers: [
    MdIconRegistry,
    ROUTER_PROVIDERS
  ]
})
@Routes([
  {path: '/fbtest', component: FbtestComponent}
])
export class BaseAppComponent {

  navItems: NavItem[] = [
    {
      route: ['/'],
      label: 'Home',
      icon: 'home',
      description: 'Go Home'
    },
    {
      route: ['/fbtest'],
      label: 'Firebase Test',
      icon: 'storage',
      description: 'Firebase Tests'
    },
    {
      route: ['/snippet'],
      label: 'Snippets',
      icon: 'content_cut',
      description: 'Code Snippets'
    }
  ];


}

interface NavItem {
  route: string[];
  label: string;
  icon: string;
  description?: string;
}
