import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../models/reservation";
import {Restaurant} from "../models/restaurant";
import {RestaurantDto} from "../models/dtos/restaurant.dto";
import {Routex} from "../constants/constants";
import {ReservationServices} from "../services/reservation.service";
import {Person} from "../models/person";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  public form!: FormGroup;
  reservation: Reservation | undefined;
  restaurant: Restaurant | undefined;
  person: { firstName: string; lastName: string; phone: string; email: string } = {
    "firstName": "Amar",
    "lastName": "Sose",
    "email": "amar@gmail.com",
    "phone": "067366363",
  } ;

  constructor(private formBuilder : FormBuilder,
              private reservationService: ReservationServices) { }

  ngOnInit(): void {

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
    this.reservationService.create(reservation).subscribe(value => {
    })
    this.form.reset();
    console.log(reservation);
    }
  }





/*submit(): void {
  const restaurant: Restaurant = this.form.value;
const facility: RestaurantDto = {
  name: restaurant.name,
  location: restaurant.location,
  numOfAvailGuests: restaurant.numOfAvailGuests,
  confirmPassword: restaurant.confirmPassword,
  numOfAvailTables: restaurant.numOfAvailTables,
  ressDescription: restaurant.ressDescription,
  contactNum: restaurant.contactNum,
  startHour: restaurant.startHour,
  endHour: restaurant.endHour,
  email: restaurant.email,
  contactManager: restaurant.contactManager,
  type: restaurant.type,
  password: restaurant.password,
}

this.restaurantService.create(facility).subscribe(value => {
  this.router.navigate([Routex.restaurantLogIn]);
})
this.form.reset();
}*/
