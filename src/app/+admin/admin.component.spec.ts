import { addProviders, inject } from '@angular/core/testing';

import { AdminComponent } from './admin.component';

import { AngularFire } from 'angularfire2';

class MockAngularFire {
  constructor() {}
}

describe('Component: Admin', () => {

  beforeEach(() => {
    addProviders([
      { provide: AngularFire, useClass: MockAngularFire },
      AdminComponent
    ]);
  });


  it('should inject the component', inject([AdminComponent],
      (component: AdminComponent) => {
    expect(component).toBeTruthy();
  }));

});
