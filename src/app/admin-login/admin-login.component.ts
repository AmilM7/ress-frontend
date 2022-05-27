import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "../models/person";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public form!: FormGroup;
  person: Person | undefined;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: [this.person?.password || '', [Validators.required]]
    })
  }



  get password(){
    return this.form.get('password')
  }

  submit(): void {
    console.log(this.form.value.password);
    this.form.reset();
  }
}
