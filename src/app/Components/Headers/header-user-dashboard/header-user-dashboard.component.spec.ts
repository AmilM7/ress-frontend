import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserDashboardComponent } from './header-user-dashboard.component';

describe('HeaderUserDashboardComponent', () => {
  let component: HeaderUserDashboardComponent;
  let fixture: ComponentFixture<HeaderUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
