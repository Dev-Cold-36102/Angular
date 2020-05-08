import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempplateDrivenFormComponent } from './tempplate-driven-form.component';

describe('TempplateDrivenFormComponent', () => {
  let component: TempplateDrivenFormComponent;
  let fixture: ComponentFixture<TempplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
