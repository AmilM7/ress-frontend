import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from "@angular/forms";
import {Person} from "../models/person";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;
  person: Person | undefined;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [this.person?.firstName || '', Validators.required],
      lastName: [this.person?.lastName || '', Validators.required],
      phone: [this.person?.phone || '', [Validators.required, Validators.pattern("[0-9\\s]{6,19}")]],
      email: [this.person?.email || '', [Validators.required, Validators.email]],
      password: [this.person?.password || '', [Validators.required, Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
      confirmPassword: [this.person?.confirmPassword || '', Validators.required]
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
    /*will be added*/
    this.form.reset();
  }
}


