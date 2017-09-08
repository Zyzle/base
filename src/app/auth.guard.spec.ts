import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { AuthGuard } from './auth.guard';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', ['navigate'])
        },
        {
          provide: Store,
          useValue: jasmine.createSpyObj('store', ['select'])
        },
        AuthGuard
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
