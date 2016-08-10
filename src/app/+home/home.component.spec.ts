import {
  addProviders,
  inject,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Component: Home', () => {

  beforeEach(() => {
    addProviders([HomeComponent]);
  });


  it('should inject the component', inject([HomeComponent],
      (component: HomeComponent) => {
    expect(component).toBeTruthy();
  }));

});
