/* tslint:disable:no-unused-variable */

import {
  addProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject,
  ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
      { provide: Router, useClass: MockRouter },
      DetailComponent
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DetailComponent],
      (component: DetailComponent) => {
    expect(component).toBeTruthy();
  }));

});
