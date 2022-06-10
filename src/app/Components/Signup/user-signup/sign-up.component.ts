import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {Person} from "../../../models/person";
import {AdminService} from "../../../Technical/services/admin.service";
import {PersonDto} from "../../../models/dtos/person.dto";
import {Router} from "@angular/router";
import {Routex} from "../../../Technical/constants/constants";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form!: FormGroup;
  person: Person | undefined;
  route: string = Routex.user + Routex.separator + Routex.restaurantDashboard;

  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  checkPassword(): boolean {
    return this.form.value.password != this.form.value.confirmPassword;
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get password() {
    return this.form.get('password');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  submit(): void {
    const user: Person = this.form.value;
    const person: PersonDto = {
      firstName:user.firstName,
      lastName:user.lastName,
      phone:user.phone,
      password:user.password,
      email:user.email,
    };

    this.adminService.create(person).subscribe(value => {
      this.router.navigate([Routex.logIn]);
    });
    this.form.reset();
  }
}


