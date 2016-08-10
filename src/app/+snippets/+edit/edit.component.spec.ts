import { addProviders, inject } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { EditComponent } from './edit.component';

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

class MockAngularFire {
  constructor() {}
}

describe('Component: Edit', () => {

  beforeEach(() => {
    addProviders([
      { provide: ActivatedRoute, useClass: MockActivatedRoute },
      { provide: Router, useClass: MockRouter },
      { provide: AngularFire, useClass: MockAngularFire },
      EditComponent
    ]);
  });

  it('should inject the component', inject([EditComponent],
      (component: EditComponent) => {
    expect(component).toBeTruthy();
  }));

});
