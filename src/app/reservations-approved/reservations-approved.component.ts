import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservations-approved',
  templateUrl: './reservations-approved.component.html',
  styleUrls: ['./reservations-approved.component.css']
})
export class ReservationsApprovedComponent implements OnInit{

  public reservations: Reservation[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
    });
  }

}
