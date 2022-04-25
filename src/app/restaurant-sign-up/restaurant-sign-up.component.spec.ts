import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSignUpComponent } from './restaurant-sign-up.component';

describe('RestaurantSignUpComponent', () => {
  let component: RestaurantSignUpComponent;
  let fixture: ComponentFixture<RestaurantSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
