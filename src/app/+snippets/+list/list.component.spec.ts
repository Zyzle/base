import {
  addProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject,
  ComponentFixture, TestComponentBuilder
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AngularFire } from 'angularfire2';

import { ListComponent } from './list.component';

class MockAngularFire {
  constructor() {}
}

class MockHttp {
  constructor() {}
}

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

describe('Component: List', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      { provide: Http, useClass: MockHttp },
      { provide: Router, useClass: MockRouter },
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ListComponent
    ]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ListComponent],
      (component: ListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ListComponentTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test-comp',
  template: `
    <app-list></app-list>
  `,
  directives: [ListComponent]
})
class ListComponentTestControllerComponent {
}
