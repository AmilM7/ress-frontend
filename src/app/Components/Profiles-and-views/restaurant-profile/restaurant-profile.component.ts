import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../Technical/constants/resolver-response.constants";
import {Restaurant} from "../../../models/restaurant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RestaurantServices} from "../../../Technical/services/restaurant.services";

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.css']
})
export class RestaurantProfileComponent implements OnInit {

  public reservations: Reservation[] = [];
  public restaurants: Restaurant[] = [];

  public form!: FormGroup;
  restaurant: Restaurant | undefined;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder, public restaurantService: RestaurantServices) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
      this.restaurants = response[ResolverResponse.restaurants];
    });

    this.form = this.formBuilder.group({
      name: [this.restaurant?.name],
      location: [this.restaurant?.location],
      numOfAvailGuests: [this.restaurant?.numOfAvailGuests, Validators.max(50)],
      numOfAvailTables: [this.restaurant?.numOfAvailTables, Validators.max(20)],
      ressDescription: [this.restaurant?.ressDescription],
      contactNum: [this.restaurant?.contactNum],
      startHour: [this.restaurant?.startHour],
      endHour: [this.restaurant?.endHour],
      email: [this.restaurant?.email || '', [Validators.required, Validators.email]],
      contactManager: [this.restaurant?.contactManager],
      type: [this.restaurant?.type],
      password: [this.restaurant?.password || '', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
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

  get contactNum() {
    return this.form.get('contactNum');
  }

  get contactManager() {
    return this.form.get('contactManager');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get type(){
    return this.form.get('type');
  }

  get startHour() {
    return this.form.get('startHour')
  }

  get endHour() {
    return this.form.get('endHour')
  }

  get ressDescription() {
    return this.form.get('ressDescription')
  }

  submit(email: string): void {
    for (let restaurant of this.restaurants){
      if (email == restaurant.email) {
        restaurant.email = this.email?.value;
        restaurant.password = this.password?.value;
        if (this.name?.value!=null)restaurant.name = this.name?.value;
        if (this.location?.value!=null)restaurant.location = this.location?.value;
        if (this.contactNum?.value!=null)restaurant.contactNum = this.contactNum?.value;
        if (this.contactManager?.value!=null)restaurant.contactManager = this.contactManager?.value;
        if (this.numOfAvailTables?.value!=null)restaurant.numOfAvailTables = this.numOfAvailTables?.value;
        if (this.numOfAvailGuests?.value!=null)restaurant.numOfAvailGuests = this.numOfAvailGuests?.value;
        if (this.startHour?.value!=null)restaurant.startHour = this.startHour?.value;
        if (this.endHour?.value!=null)restaurant.endHour = this.endHour?.value;
        if (this.type?.value!=null)restaurant.type = this.type?.value;
        if (this.ressDescription?.value!=null)restaurant.ressDescription = this.ressDescription?.value;
        this.restaurantService.updateIsAcceptedToTrue(email, restaurant).subscribe(value => {

        });
      }
    }

    this.form.reset();
  }

}
