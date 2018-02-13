import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCalendarComponent } from './git-calendar.component';

describe('GitCalendarComponent', () => {
  let component: GitCalendarComponent;
  let fixture: ComponentFixture<GitCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
