import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../models/reservation";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  public form!: FormGroup;
  reservation: Reservation | undefined;

  constructor(private formBuilder : FormBuilder) { }

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
    console.log('form submitted');
    this.form.reset();
  }

}
