import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsApprovedComponent } from './reservations-approved.component';

describe('ReservationsApprovedComponent', () => {
  let component: ReservationsApprovedComponent;
  let fixture: ComponentFixture<ReservationsApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
