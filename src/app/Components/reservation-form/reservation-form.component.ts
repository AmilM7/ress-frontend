import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../../models/reservation";
import {Restaurant} from "../../models/restaurant";
import {Routex} from "../../Technical/constants/constants";
import {ReservationServices} from "../../Technical/services/reservation.service";
import {Person} from "../../models/person";
import {ResolverResponse} from "../../Technical/constants/resolver-response.constants";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../Technical/services/profile.services";

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
              private router: Router,
              private profileService: ProfileService,) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.restaurant = response[ResolverResponse.restaurant];
    });

    this.person = this.profileService.getProfile();
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




