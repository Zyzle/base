import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdIcon } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { AuthComponent } from './auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
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
    MdIconRegistry
  ]
})
export class AppComponent {
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
      route: ['/admin'],
      label: 'Admin',
      icon: 'settings',
      description: 'Various site settings'
    },
    {
      route: ['/snippets'],
      label: 'Snippets',
      icon: 'content_cut',
      description: 'Code Snippets'
    },
    {
      route: ['/highlight-test'],
      label: 'Highlight JS',
      icon: 'code',
      description: 'Code highlighting with HighlightJS'
    }
  ];
}

interface NavItem {
  route: string[];
  label: string;
  icon: string;
  description?: string;
}
