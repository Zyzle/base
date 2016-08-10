import { Component, OnInit } from '@angular/core';

import { LanguageAdminComponent } from './language-admin';


@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  directives: [
    LanguageAdminComponent
  ]
})
export class AdminComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
