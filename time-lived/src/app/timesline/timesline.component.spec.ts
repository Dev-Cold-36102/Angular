import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslineComponent } from './timesline.component';

describe('TimeslineComponent', () => {
  let component: TimeslineComponent;
  let fixture: ComponentFixture<TimeslineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
