/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { Component, provide, DebugElement } from '@angular/core';

import {
  addProviders, beforeEach,
  describe, xdescribe,
  expect, it, xit,
  async, inject,
  ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';

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
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      provide(Router, {useClass: MockRouter}),
      provide(AngularFire, {useClass: MockAngularFire}),
      LoginComponent
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should inject the component', inject([LoginComponent],
    (component: LoginComponent) => {
    expect(component).toBeTruthy();
  }));

});

@Component({
  selector: 'test-comp',
  template: `
    <app-login></app-login>
  `,
  directives: [LoginComponent]
})
class LoginComonentTestControllerComponent {

}
