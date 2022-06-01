import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsOfUserComponent } from './reservations-of-user.component';

describe('ReservationsOfUserComponent', () => {
  let component: ReservationsOfUserComponent;
  let fixture: ComponentFixture<ReservationsOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsOfUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
