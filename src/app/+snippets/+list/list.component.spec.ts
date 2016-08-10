/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AngularFire } from 'angularfire2';

import { ListComponent } from './list.component';

class MockAngularFire {
  constructor() {}
}

class MockHttp {
  constructor() {}
}

class MockRouter {
  constructor() {}
}

class MockActivatedRoute {
  params: ReplaySubject<string>;
  constructor() {
    this.params = new ReplaySubject<string>();
    this.params.next('1');
  }
}

describe('Component: List', () => {

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      { provide: Router, useClass: MockRouter },
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ListComponent
    ]);
  });

  it('should inject the component', inject([ListComponent],
      (component: ListComponent) => {
    expect(component).toBeTruthy();
  }));

});
