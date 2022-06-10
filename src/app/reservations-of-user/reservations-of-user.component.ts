import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../models/restaurant";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../Technical/constants/resolver-response.constants";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservations-of-user',
  templateUrl: './reservations-of-user.component.html',
  styleUrls: ['./reservations-of-user.component.css']
})
export class ReservationsOfUserComponent implements OnInit {

  public reservations: Reservation [] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservationsOfUser];
    });
  }
}



