import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {Person} from "../models/person";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public reservations: Reservation[] = [];
  public admins: Person[] = [];

  public form!: FormGroup;
  person: Person | undefined;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder, public adminsSrvice: AdminService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservations];
      this.admins = response[ResolverResponse.admins]
    });

    this.form = this.formBuilder.group({
      email: [this.person?.email || '', [Validators.required, Validators.email]],
      password: [this.person?.password || '', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      fname: [this.person?.firstName],
      lname: [this.person?.lastName],
      phone: [this.person?.phone]
    })
  }

  get emailupdate(){
    return this.form.get('email');
  }

  get passwordupdate(){
    return this.form.get('password');
  }

  get fname(){
    return this.form.get('fname');
  }

  get lname(){
    return this.form.get('lname');
  }

  get phone(){
    return this.form.get('phone');
  }

  submit(id: string): void {
    for (let user of this.admins){
      if (id == user.id) {
        user.email = this.emailupdate?.value;
        user.password = this.passwordupdate?.value;
        if (this.fname?.value!=null)user.firstName = this.fname?.value;
        if (this.lname?.value!=null)user.lastName = this.lname?.value;
        if (this.phone?.value!=null)user.phone = this.phone?.value;
        this.adminsSrvice.updateUser(user, id).subscribe(value => {

        });
      }
    }

    this.form.reset();
  }

}
