import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

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
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    { provide: AngularFire, useClass: MockAngularFire },
    AuthComponent
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AuthComponent],
      (component: AuthComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AuthComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AuthComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  it('should start with card closed and allow toggle', inject([AuthComponent],
    (component: AuthComponent) => {
      expect(component.authCardOpen).toBe(false);
      component.toggleCardOpen();
      expect(component.authCardOpen).toBe(true);
    }));
});

@Component({
  selector: 'test-comp',
  template: `
    <app-auth></app-auth>
  `,
  directives: [AuthComponent]
})
class AuthComponentTestControllerComponent {
}
