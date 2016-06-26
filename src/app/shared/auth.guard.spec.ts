/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { provide } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AngularFire } from 'angularfire2';

import {AuthGuard} from './auth.guard';

class MockRouter {}

class MockAngularFire {
  auth: ReplaySubject<any>;

  constructor() {
    this.auth = new ReplaySubject<any>();
    this.auth.next(null);
  }

  fakeLoginUser() {
    this.auth.next({uid: 'jadsnflnadslfkn'});
  }
}

describe('AuthGuard', () => {

  beforeEachProviders(() => [
    provide(AngularFire, {useClass: MockAngularFire}),
    provide(Router, {useClass: MockRouter}),
    AuthGuard
  ]);

  it('should create an instance', inject([AuthGuard], (ag: AuthGuard) => {
    expect(ag).toBeTruthy();
  }));

  it('should deny unauthenticated users', inject([AuthGuard], (ag: AuthGuard) => {
    expect(ag.canActivate()).toBe(false);
  }));

  it('should allow authenticated users', inject([AngularFire, AuthGuard], (af: MockAngularFire, ag: AuthGuard) => {
    expect(ag.canActivate()).toBe(false);
    af.fakeLoginUser();
    expect(ag.canActivate()).toBe(true);
  }));
});
