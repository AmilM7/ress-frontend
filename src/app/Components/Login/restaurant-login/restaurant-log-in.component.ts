import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../../../models/restaurant";

@Component({
  selector: 'app-restaurant-log-in',
  templateUrl: './restaurant-log-in.component.html',
  styleUrls: ['./restaurant-log-in.component.css']
})
export class RestaurantLogInComponent implements OnInit {
  public form!: FormGroup;
  restaurant: Restaurant | undefined;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [this.restaurant?.email || '', [Validators.required, Validators.email]],
      password: [this.restaurant?.password || '', [Validators.required]]
    })
  }
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password')
  }

  submit(): void {
    console.log(this.form.value.email);
    this.form.reset();
  }

}
