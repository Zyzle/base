/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement, provide } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';

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
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(AngularFire, {useClass: MockAngularFire}),
    provide(Router, {useClass: MockRouter}),
    AddComponent
  ]);

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should inject the component', inject([AddComponent], (component: AddComponent) => {
      expect(component).toBeTruthy();
  }));

});
