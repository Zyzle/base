/* tslint:disable:no-unused-variable */

import {
  beforeEach,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CanDeactivateGuard } from './candeactivate.guard';

describe('Guard: CanDeactivate', () => {
  it('should create an instance', () => {
    expect(new CanDeactivateGuard()).toBeTruthy();
  });
});
