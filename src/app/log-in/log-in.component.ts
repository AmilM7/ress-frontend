import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, FormBuilder, Validators} from "@angular/forms";
import {Person} from "../models/person";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  public form!: FormGroup;
  person: Person | undefined;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [this.person?.email || '', [Validators.required, Validators.email]],
      password: [this.person?.password || '', [Validators.required]]
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
