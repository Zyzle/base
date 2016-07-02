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
import { ActivatedRoute, Router, RouterOutletMap } from '@angular/router';

import { SnippetsComponent } from './snippets.component';

class MockRouter {
  constructor() {}
}

class MockActivatedRoute {
  constructor() {}
}

class MockRouterOutletMap {
  constructor() {}

  registerOutlet() {

  }
}


describe('Component: Snippets', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      provide(Router, {useClass: MockRouter}),
      provide(ActivatedRoute, {useClass: MockActivatedRoute}),
      provide(RouterOutletMap, {useClass: MockRouterOutletMap}),
      SnippetsComponent
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SnippetsComponent],
      (component: SnippetsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SnippetsComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SnippetsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test-comp',
  template: `
    <app-snippets></app-snippets>
  `,
  directives: [SnippetsComponent]
})
class SnippetsComponentTestControllerComponent {
}
