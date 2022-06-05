import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../models/restaurant";
import {RestaurantServices} from "../services/restaurant.services";
import {Person} from "../models/person";
import {PersonDto} from "../models/dtos/person.dto";
import {RestaurantDto} from "../models/dtos/restaurant.dto";
import {Type} from "../models/type.enum";
import {Routex} from "../constants/constants";
import {Router} from "@angular/router";


@Component({
  selector: 'app-restaurant-sign-up',
  templateUrl: './restaurant-sign-up.component.html',
  styleUrls: ['./restaurant-sign-up.component.css']
})
export class RestaurantSignUpComponent implements OnInit {
  public form!: FormGroup;
  restaurant: Restaurant | undefined;

  constructor(private formBuilder: FormBuilder,
              private restaurantService: RestaurantServices,
              private router: Router,) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.restaurant?.name || '', Validators.required],
      location: [this.restaurant?.location || '', Validators.required],
      numOfAvailGuests: [this.restaurant?.numOfAvailGuests || '', [Validators.required, Validators.max(50)]],
      numOfAvailTables: [this.restaurant?.numOfAvailTables || '', [Validators.required, Validators.max(20)]],
      ressDescription: [this.restaurant?.ressDescription || '', Validators.required],
      contactNum: [this.restaurant?.contactNum || '', Validators.required],
      startHour: [this.restaurant?.startHour || '', Validators.required],
      endHour: [this.restaurant?.endHour || '', Validators.required],
      email: [this.restaurant?.email || '', [Validators.required, Validators.email]],
      contactManager: [this.restaurant?.contactManager || '', Validators.required],
      type: [this.restaurant?.type || '', Validators.required],
      password: [this.restaurant?.password || '', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      confirmPassword: [this.restaurant?.confirmPassword || '', Validators.required],
      id:[]

    })
  }

  get name() {
    return this.form.get('name');
  }

  get location() {
    return this.form.get('location');
  }

  get numOfAvailGuests() {
    return this.form.get('numOfAvailGuests');
  }

  get numOfAvailTables() {
    return this.form.get('numOfAvailTables');
  }

  get ressDescription() {
    return this.form.get('ressDescription');
  }

  get contactNum() {
    return this.form.get('contactNum');
  }

  get startHour() {
    return this.form.get('startHour');
  }

  get endHour() {
    return this.form.get('endHour');
  }

  get email() {
    return this.form.get('email');
  }

  get contactManager() {
    return this.form.get('contactManager');
  }

  get type() {
    return this.form.get('type');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  checkPassword(): boolean {
    return this.form.value.password != this.form.value.confirmPassword;
  }


  submit(): void {
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
  }

}
