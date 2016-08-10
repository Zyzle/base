/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { DetailComponent } from './detail.component';

class MockAngularFire {
  constructor() {}
}

class MockActivatedRoute {
  params: ReplaySubject<string>;
  constructor() {
    this.params = new ReplaySubject<string>();
    this.params.next('1');
  }
}

class MockRouter {
  constructor() {}
}

describe('Component: Detail', () => {

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
      { provide: Router, useClass: MockRouter },
      DetailComponent
    ]);
  });

  it('should inject the component', inject([DetailComponent],
      (component: DetailComponent) => {
    expect(component).toBeTruthy();
  }));

});
