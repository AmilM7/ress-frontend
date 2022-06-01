import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {Restaurant} from "../models/restaurant";

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.css']
})
export class RestaurantProfileComponent implements OnInit {

  public reservations: Reservation[] = [];
  public restaurants: Restaurant[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
      this.restaurants = response[ResolverResponse.restaurants];
    });
  }
}
