import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SnippetsMaterialModule } from '../snippets-material.module';

import { SnippetsListComponent } from './snippets-list.component';

describe('SnippetsListComponent', () => {
  let component: SnippetsListComponent;
  let fixture: ComponentFixture<SnippetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([]),
        SnippetsMaterialModule
      ],
      declarations: [ SnippetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsListComponent);
    component = fixture.componentInstance;
    component.snippets = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
