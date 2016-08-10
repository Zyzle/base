import { addProviders, inject } from '@angular/core/testing';

import { ActivatedRoute, Router, RouterOutletMap } from '@angular/router';

import { SnippetsComponent } from './snippets.component';

class MockRouter {
  constructor() {}
}

class MockActivatedRoute {
  constructor() {}
}

class MockRouterOutletMap {
  constructor() {}

  registerOutlet() {

  }
}


describe('Component: Snippets', () => {

  beforeEach(() => {
    addProviders([
      { provide: Router, useClass: MockRouter },
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
      { provide: RouterOutletMap, useClass: MockRouterOutletMap },
      SnippetsComponent
    ]);
  });


  it('should inject the component', inject([SnippetsComponent],
      (component: SnippetsComponent) => {
    expect(component).toBeTruthy();
  }));

});
