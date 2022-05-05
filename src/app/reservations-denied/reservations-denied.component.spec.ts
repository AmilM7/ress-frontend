import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDeniedComponent } from './reservations-denied.component';

describe('ReservationsDeniedComponent', () => {
  let component: ReservationsDeniedComponent;
  let fixture: ComponentFixture<ReservationsDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
