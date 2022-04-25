import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../models/restaurant";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


  public restaurants: Restaurant[] = [];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.restaurants = response[ResolverResponse.restaurants];
    });
  }




}
