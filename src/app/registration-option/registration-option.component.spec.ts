import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOptionComponent } from './registration-option.component';

describe('RegistrationOptionComponent', () => {
  let component: RegistrationOptionComponent;
  let fixture: ComponentFixture<RegistrationOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
