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

import { AngularFire } from 'angularfire2';

import { FbtestComponent } from './fbtest.component';

class MockAngularFire {
  constructor() {}
}

describe('Component: Fbtest', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(AngularFire, {useClass: MockAngularFire}),
    FbtestComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FbtestComponent],
      (component: FbtestComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FbtestComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FbtestComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-fbtest></app-fbtest>
  `,
  directives: [FbtestComponent]
})
class FbtestComponentTestController {
}
