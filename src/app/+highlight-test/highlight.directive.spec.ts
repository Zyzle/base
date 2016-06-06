import {
  async,
  beforeEachProviders,
  describe,
  it,
  inject
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import { Component } from '@angular/core';
// import { Highlight } from './highlight.directive';

@Component({
  selector: 'test-component',
  template: `<div highlight></div>`
})
class TestComponent {}

describe('Highlight Directive', () => {
  beforeEachProviders((): any[] => []);

  it('should ...', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(TestComponent).then((fixture: ComponentFixture<any>) => {
      fixture.detectChanges();
    });
  })));
});
