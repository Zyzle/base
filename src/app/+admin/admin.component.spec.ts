import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject,
  ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';

import { AngularFire } from 'angularfire2';

class MockAngularFire {
  constructor() {}
}

describe('Component: Admin', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      AdminComponent
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AdminComponent],
      (component: AdminComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AdminComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AdminComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test-comp',
  template: `
    <app-admin></app-admin>
  `,
  directives: [AdminComponent]
})
class AdminComponentTestControllerComponent {
}
