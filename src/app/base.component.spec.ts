import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BaseAppComponent } from '../app/base.component';

beforeEachProviders(() => [BaseAppComponent]);

describe('App: Base', () => {
  it('should create the app',
      inject([BaseAppComponent], (app: BaseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should contain the 5 nav components',
      inject([BaseAppComponent], (app: BaseAppComponent) => {
    expect(app.navItems.length).toEqual(5);
  }));
});
