import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPendingComponent } from './reservations-pending.component';

describe('ReservationsPendingComponent', () => {
  let component: ReservationsPendingComponent;
  let fixture: ComponentFixture<ReservationsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
