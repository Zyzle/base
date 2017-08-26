import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksMainPageComponent } from './bookmarks-main-page.component';

describe('BookmarksMainPageComponent', () => {
  let component: BookmarksMainPageComponent;
  let fixture: ComponentFixture<BookmarksMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
