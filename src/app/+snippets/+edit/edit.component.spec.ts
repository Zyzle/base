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
import { ActivatedRoute } from '@angular/router';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { EditComponent } from './edit.component';

class MockActivatedRoute {
  params: ReplaySubject<string>;
  constructor() {
    this.params = new ReplaySubject<string>();
    this.params.next('1');
  }
}

describe('Component: Edit', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(ActivatedRoute, {useClass: MockActivatedRoute}),
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
    return builder.createAsync(EditComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(EditComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-edit></app-edit>
  `,
  directives: [EditComponent]
})
class EditComponentTestController {
}
