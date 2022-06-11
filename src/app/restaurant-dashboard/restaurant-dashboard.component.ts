import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {ReservationServices} from "../services/reservation.service";
import {Restaurant} from "../models/restaurant";
import {Person} from "../models/person";


@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  public reservations: Reservation[] = [];
  public restaurants: Restaurant[] = [];
  public person: Person | undefined;

  constructor(private activatedRoute: ActivatedRoute, public reservationServices: ReservationServices) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
      this.restaurants = response[ResolverResponse.restaurants];
    });
  }

  doApprove(id: string):void {
    for (let reservation of this.reservations){
      if (id == reservation.id) {
        reservation.approval = 'approved';
        this.reservationServices.updateReservationApproved(reservation, id).subscribe(value => {

        });
      }
    }
  }

  doDeny(id: string): void {
    for (let reservation of this.reservations) {
      if (id == reservation.id) {
        reservation.approval = 'denied';
        this.reservationServices.updateReservationDenied(reservation, id).subscribe(value => {

        });
      }
    }

  }
}
