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

  it('should have as title \'base works!\'',
      inject([BaseAppComponent], (app: BaseAppComponent) => {
    expect(app.title).toEqual('base works!');
  }));
});
