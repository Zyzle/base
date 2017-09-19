import { Component, Input, OnInit } from '@angular/core';

import { AuthState } from '../reducers/auth.reducers';

@Component({
  selector: 'base-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  auth: AuthState | null;

  constructor() { }

  ngOnInit() {
  }

}
