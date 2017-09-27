import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SnippetsMaterialModule } from '../snippets-material.module';

import { LanguagesListComponent } from './languages-list.component';

describe('LanguagesListComponent', () => {
  let component: LanguagesListComponent;
  let fixture: ComponentFixture<LanguagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        SnippetsMaterialModule
      ],
      declarations: [ LanguagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesListComponent);
    component = fixture.componentInstance;
    component.languages = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
