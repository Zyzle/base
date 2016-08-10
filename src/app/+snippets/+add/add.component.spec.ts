/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';

import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { AddComponent } from './add.component';

class MockAngularFire {
  constructor() {}
}

class MockRouter {
  constructor() {}
}

describe('Component: Add', () => {

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      { provide: Router, useClass: MockRouter },
      AddComponent
    ]);
  });


  it('should inject the component', inject([AddComponent], (component: AddComponent) => {
      expect(component).toBeTruthy();
  }));

});
