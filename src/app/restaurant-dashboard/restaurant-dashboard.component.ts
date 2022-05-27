import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  public reservations: Reservation[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
    });
  }

  doApprove(id: string):void {
    for (let reservation of this.reservations){
      if (id == reservation.id) reservation.approval='approved';
    }
  }

  doDeny(id: string): void {
    for (let reservation of this.reservations){
      if (id == reservation.id) reservation.approval='denied';
    }
  }
}
