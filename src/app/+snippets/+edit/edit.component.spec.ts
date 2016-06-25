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
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { EditComponent } from './edit.component';

class MockRouter {
  constructor() {}
}

class MockActivatedRoute {
  params: ReplaySubject<string>;
  constructor() {
    this.params = new ReplaySubject<string>();
    this.params.next('1');
  }
}

class MockAngularFire {
  constructor() {}
}

describe('Component: Edit', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(ActivatedRoute, {useClass: MockActivatedRoute}),
    provide(Router, {useClass: MockRouter}),
    provide(AngularFire, {useClass: MockAngularFire}),
    EditComponent
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([EditComponent],
      (component: EditComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(EditComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(EditComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test-comp',
  template: `
    <app-edit></app-edit>
  `,
  directives: [EditComponent]
})
class EditComponentTestControllerComponent {
}
