import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRestaurantDashboardComponent } from './header-restaurant-dashboard.component';

describe('HeaderRestaurantDashboardComponent', () => {
  let component: HeaderRestaurantDashboardComponent;
  let fixture: ComponentFixture<HeaderRestaurantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRestaurantDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRestaurantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
