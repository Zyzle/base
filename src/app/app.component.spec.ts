/* tslint:disable:no-unused-variable */

import {
  addProviders, beforeEach,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

beforeEach(() => {
  addProviders([AppComponent]);
});

describe('App: Base', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should contain the 3 nav components',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.navItems.length).toEqual(3);
  }));
});
