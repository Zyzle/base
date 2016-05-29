import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FirebaseAuth } from 'angularfire2';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AuthComponent } from './auth.component';

class MockFirebaseAuth extends ReplaySubject<any> {
  constructor() {
    super();
    this.next({auth: true});
  }
}

describe('Component: Auth', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(FirebaseAuth, {useClass: MockFirebaseAuth}),
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
    return builder.createAsync(AuthComponentTestController)
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
  selector: 'test',
  template: `
    <app-auth></app-auth>
  `,
  directives: [AuthComponent]
})
class AuthComponentTestController {
}
