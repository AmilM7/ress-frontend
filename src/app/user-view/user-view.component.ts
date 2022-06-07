import { Component, OnInit } from '@angular/core';
import {Reservation} from "../models/reservation";
import {Person} from "../models/person";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public person: Person | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.person = response[ResolverResponse.singleUser]
    });
  }
}
