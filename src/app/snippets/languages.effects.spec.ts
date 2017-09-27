import { TestBed, inject } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { LanguagesEffects } from './languages.effects';

describe('LanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('store', ['select', 'dispatch'])
        },
        {
          provide: AngularFireDatabase,
          useValue: jasmine.createSpyObj('firebase', ['list'])
        },
        // LanguagesService
      ]
    });
  });

  // TODO: implement once the angularfire testing mechanism is updated
  // xit('should be created', inject([LanguagesService], (service: LanguagesService) => {
  //   expect(service).toBeTruthy();
  // }));
});
