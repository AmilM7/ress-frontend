import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOptionComponent } from './login-option.component';

describe('LoginOptionComponent', () => {
  let component: LoginOptionComponent;
  let fixture: ComponentFixture<LoginOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
