import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../models/reservation";
import {Restaurant} from "../models/restaurant";
import {RestaurantDto} from "../models/dtos/restaurant.dto";
import {Routex} from "../constants/constants";
import {ReservationServices} from "../services/reservation.service";
import {Person} from "../models/person";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  public form!: FormGroup;
  reservation: Reservation | undefined;
  restaurant: Restaurant | undefined;
  person: Person | undefined;


  constructor(private formBuilder : FormBuilder,
              private reservationService: ReservationServices,
              private activatedRoute: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((response: any) => {
      this.person = response[ResolverResponse.uniqueUser];
      this.restaurant = response[ResolverResponse.restaurant];
    });


    this.form = this.formBuilder.group({
      numberOfGuests: [this.reservation?.numberOfGuests || '', [Validators.required, Validators.max(50)]],
      date: [this.reservation?.date || '', [Validators.required]],
      time: [this.reservation?.time || '', [Validators.required]],
      description: [this.reservation?.description || '', [Validators.required]],
    })
  }

  get numberOfGuests(){
    return this.form.get('numberOfGuests');
  }

  get date(){
    return this.form.get('date');
  }

  get time(){
    return this.form.get('time');
  }

  get description(){
    return this.form.get('description');
  }

  submit(): void {
    console.log(this.form.value);
    const reservation: Reservation = this.form.value;
    if (this.restaurant) {
      reservation.restaurant = this.restaurant;
    }
    if (this.person) {
      reservation.user = this.person;
    }
    this.reservationService.create(reservation).subscribe(value => {
      this.router.navigate([Routex.successPage]);
    })
    this.form.reset();
    }
  }




