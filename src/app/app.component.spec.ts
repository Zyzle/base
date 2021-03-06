import { TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Store } from '@ngrx/store';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        AppMaterialModule
      ],
      declarations: [
        AppComponent,
        UserInfoComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('store', ['select'])
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should render title in the header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title>span').textContent).toContain('Base');
  }));
});
