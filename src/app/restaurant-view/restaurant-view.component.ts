import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {Restaurant} from "../models/restaurant";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {

  public restaurant: Restaurant | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.restaurant = response[ResolverResponse.restaurant];
    });
  }

}
