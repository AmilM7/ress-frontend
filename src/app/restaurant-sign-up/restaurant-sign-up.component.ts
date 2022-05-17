import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../models/restaurant";
import {RestaurantServices} from "../services/restaurant.services";


@Component({
  selector: 'app-restaurant-sign-up',
  templateUrl: './restaurant-sign-up.component.html',
  styleUrls: ['./restaurant-sign-up.component.css']
})
export class RestaurantSignUpComponent implements OnInit {
  public form!: FormGroup;
  restaurant: Restaurant | undefined;

  constructor(private  formBuilder : FormBuilder,
              private restaurantService: RestaurantServices) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.restaurant?.name || '', Validators.required],
      location: [this.restaurant?.location || '', Validators.required],
      numOfAvailGuests: [this.restaurant?.numOfAvailGuests || '', [Validators.required, Validators.max(9)]],
      numOfAvailTables: [this.restaurant?.numOfAvailTables || '', [Validators.required, Validators.max(15)]],
      description: [this.restaurant?.description || '', [Validators.required,]],
      contactNum: [this.restaurant?.contactNum || '', Validators.required],
      startHour:[this.restaurant?.startHour||'', Validators.required],
      endHour:[this.restaurant?.endHour||'', Validators.required],
      email: [this.restaurant?.email || '', [Validators.required, Validators.email]],
      contactManager:[this.restaurant?.contactManager||'', Validators.required],
      type: [this.restaurant?.type || '', Validators.required],
      password: [this.restaurant?.password || '', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      confirmPassword: [this.restaurant?.confirmPassword || '', Validators.required]

    })
  }

  get name(){
    return this.form.get('name');
  }

  get location(){
    return this.form.get('location');
  }

  get numOfAvailGuests(){
    return this.form.get('numOfAvailGuests');
  }

  get numOfAvailTables() {
    return this.form.get('numOfAvailTables');
  }

  get description() {
    return this.form.get('description');
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
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  checkPassword (): boolean{
    return this.form.value.password!=this.form.value.confirmPassword;
  }


  submit(): void {
     this.saveItem(this.form.value);
    /*will be added*/
    this.form.reset();
  }

  saveItem (restaurant: Restaurant): void {
    this.restaurantService.create(restaurant);
  }

 /* saveItem(item: Item): void {
    if (this.isEditing) {
      const existingIndex = this.items.findIndex(i => i[ItemProperty.id] === item[ItemProperty.id]);
      this.items.splice(existingIndex, 1, item);
      this.router.navigate([Route.ITEMS]);
    } else {
      this.itemService.create(item).subscribe(value => {
        this.router.navigate([Route.ITEMS]);
      });
    }
  }*/
}
