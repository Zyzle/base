import { TestBed, inject } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { of } from 'rxjs/observable/of';


import { AuthService } from './auth.service';

describe('AuthService', () => {
  let auth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AngularFireAuth,
          useValue: jasmine.createSpyObj('fireauth', ['signInWithPopup', 'signOut'])
        },
        {
          provide: Store,
          useValue: jasmine.createSpyObj('store', ['select', 'dispatch'])
        },
        AuthService
      ]
    });

    auth = TestBed.get(AngularFireAuth);
    auth.authState = of(null);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
