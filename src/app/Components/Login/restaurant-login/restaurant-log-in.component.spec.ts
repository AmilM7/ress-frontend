import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLogInComponent } from './restaurant-log-in.component';

describe('RestaurantLogInComponent', () => {
  let component: RestaurantLogInComponent;
  let fixture: ComponentFixture<RestaurantLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
