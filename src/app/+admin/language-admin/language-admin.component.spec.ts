import { addProviders, inject} from '@angular/core/testing';

import { LanguageAdminComponent } from './language-admin.component';

import { AngularFire } from 'angularfire2';

class MockAngularFire {
  constructor() {}
}

describe('Component: LanguageAdmin', () => {

  beforeEach(() => {
    addProviders([
      {provide: AngularFire, useClass: MockAngularFire },
      LanguageAdminComponent
    ]);
  });


  it('should inject the component', inject([LanguageAdminComponent],
      (component: LanguageAdminComponent) => {
    expect(component).toBeTruthy();
  }));

});
