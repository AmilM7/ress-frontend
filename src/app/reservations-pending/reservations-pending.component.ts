import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";

@Component({
  selector: 'app-reservations-pending',
  templateUrl: './reservations-pending.component.html',
  styleUrls: ['./reservations-pending.component.css']
})
export class ReservationsPendingComponent implements OnInit {

  public reservations: Reservation[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
    });
  }

}
