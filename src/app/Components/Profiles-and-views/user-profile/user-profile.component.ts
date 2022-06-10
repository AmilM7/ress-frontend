import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../../models/reservation";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../../../Technical/constants/resolver-response.constants";
import {Person} from "../../../models/person";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../Technical/services/admin.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public reservations: Reservation[] = [];

  public form!: FormGroup;
  public person: Person | undefined;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder, public adminsSrvice: AdminService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.reservations = response[ResolverResponse.reservationsOfUser];
      this.person = response[ResolverResponse.uniqueUser];
    });

    this.form = this.formBuilder.group({
      email: [this.person?.email || '', [Validators.required, Validators.email]],
      password: [this.person?.password || '', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      firstName: [this.person?.firstName],
      lastName: [this.person?.lastName],
      phone: [this.person?.phone],
    })
  }

  get emailupdate(){
    return this.form.get('email');
  }

  get firstname(){
    return this.form.get('firstName');
  }

  get lastname(){
    return this.form.get('lastName');
  }

  get phone(){
    return this.form.get('phone');
  }

  submit(id: string): void {
    const user: Person = this.form.value;
    this.adminsSrvice.updateUser(user, id).subscribe(value => {
      this.person = user;
    });
    this.form.reset();
    }
}
