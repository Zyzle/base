import {
  addProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject,
  ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';
import { Component, provide } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LanguageAdminComponent } from './language-admin.component';

import { AngularFire } from 'angularfire2';

class MockAngularFire {
  constructor() {}
}

describe('Component: LanguageAdmin', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      provide(AngularFire, {useClass: MockAngularFire}),
      LanguageAdminComponent
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LanguageAdminComponent],
      (component: LanguageAdminComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LanguageAdminComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LanguageAdminComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test-component',
  template: `
    <app-language-admin></app-language-admin>
  `,
  directives: [LanguageAdminComponent]
})
class LanguageAdminComponentTestControllerComponent {
}
