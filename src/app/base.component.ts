import { Component } from '@angular/core';
import { LoginComponent } from './+login';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

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
    MdButton
  ],
  providers: [
    MdIconRegistry,
    ROUTER_PROVIDERS
  ]
})
@Routes([
  {path: '/login', component: LoginComponent}
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
      route: ['/login'],
      label: 'Login',
      icon: 'lock_outline',
      description: 'Login to Base'
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
