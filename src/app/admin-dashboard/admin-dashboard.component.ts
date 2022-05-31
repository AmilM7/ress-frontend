import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../models/person";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {Restaurant} from "../models/restaurant";
import {RestaurantServices} from "../services/restaurant.services";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public admins : Person[] = [];

  public restaurants: Restaurant[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((response: any) => {
      this.restaurants = response[ResolverResponse.notAccepted];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.admins = response[ResolverResponse.admins];
    });

  }

  doApprove():void {
    for (let restaurant of this.restaurants){
      console.log("works")
    }
  }

  doDeny(): void {
    for (let reservation of this.restaurants){
      console.log("works")
    }
  }

}
