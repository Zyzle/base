/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';

import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AngularFire, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

import { AuthGuard } from './auth.guard';

class MockRouter {}

class MockFirebaseAuth extends ReplaySubject<any> {
  constructor() {
    super();
  }

  fakeLoginUser() {
    this.next({uid: 'jadsnflnadslfkn'});
  }
}

describe('Guard: Auth', () => {

  beforeEach(() => {
    addProviders([
      { provide: FirebaseAuth, useClass: MockFirebaseAuth },
      { provide: Router, useClass: MockRouter },
      AuthGuard
    ]);
  });

  it('should create an instance', inject([AuthGuard], (ag: AuthGuard) => {
    expect(ag).toBeTruthy();
  }));

  it('should deny unauthenticated users', inject([AuthGuard], (ag: AuthGuard) => {
    ag.canActivate().subscribe((auth: boolean) => {
      expect(auth).toBe(false);
    });
  }));

  it('should allow authenticated users', inject([FirebaseAuth, AuthGuard], (af: MockFirebaseAuth, ag: AuthGuard) => {
    af.fakeLoginUser();
    ag.canActivate().subscribe((auth: boolean) => {
      expect(auth).toBe(true);
    });
  }));
});
