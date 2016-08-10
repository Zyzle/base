/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';

import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

import { AngularFire } from 'angularfire2';
import { ReplaySubject } from 'rxjs/ReplaySubject';

class MockAngularFire {
  auth: ReplaySubject<any>;

  constructor() {
    this.auth = new ReplaySubject<any>();
    this.auth.next(null);
  }
}

class MockRouter {
  constructor() {}
}

describe('Component: login', () => {

  beforeEach(() => {
    addProviders([
      { provide: Router, useClass: MockRouter },
      { provide: AngularFire, useClass: MockAngularFire },
      LoginComponent
    ]);
  });


  it('should inject the component', inject([LoginComponent],
    (component: LoginComponent) => {
    expect(component).toBeTruthy();
  }));

});
