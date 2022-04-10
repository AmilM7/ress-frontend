import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validator} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  public form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    /*will be added*/
  }
}
