import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../../models/person";
import {ResolverResponse} from "../../../Technical/constants/resolver-response.constants";
import {Restaurant} from "../../../models/restaurant";
import {RestaurantServices} from "../../../Technical/services/restaurant.services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public admins : Person[] = [];

  public restaurants: Restaurant[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private restaurantService: RestaurantServices) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((response: any) => {
      this.restaurants = response[ResolverResponse.notAccepted];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.admins = response[ResolverResponse.admins];
    });
  }

  doApprove(restaurant:Restaurant):void {
    this.restaurantService.updateIsAcceptedToTrue(restaurant.email, restaurant).subscribe(value => {
        const index = this.restaurants.indexOf(restaurant);
        if(index !== -1) {
          this.restaurants.splice(index,1);
        }
    });

  }

  doDeny(email: string, restaurant:Restaurant): void {
    this.restaurantService.deleteRestaurant(email).subscribe(value => {
      const index = this.restaurants.indexOf(restaurant);
      if(index !== -1) {
        this.restaurants.splice(index,1);
      }
    });
  }

}
