import { addProviders, inject } from '@angular/core/testing';

import { AngularFire } from 'angularfire2';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AuthComponent } from './auth.component';

class MockUser {
    set(o: any) {}
}

class MockDatabase {
  object(s: string) {
    return new MockUser();
  }
}

class MockAngularFire {
  auth: ReplaySubject<any>;
  database: MockDatabase;

  constructor() {
    this.auth = new ReplaySubject<any>();
    this.auth.next({uid: 1, auth: {displayName: ''}});
    this.database = new MockDatabase();
  }
}


describe('Component: Auth', () => {

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      AuthComponent
    ]);
  });

  it('should inject the component', inject([AuthComponent],
      (component: AuthComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should start with card closed and allow toggle', inject([AuthComponent],
    (component: AuthComponent) => {
      expect(component.authCardOpen).toBe(false);
      component.toggleCardOpen();
      expect(component.authCardOpen).toBe(true);
    }));
});
