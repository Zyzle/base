import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsMainPageComponent } from './snippets-main-page.component';

describe('SnippetsMainPageComponent', () => {
  let component: SnippetsMainPageComponent;
  let fixture: ComponentFixture<SnippetsMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
