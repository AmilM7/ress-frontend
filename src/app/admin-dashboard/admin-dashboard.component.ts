import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../models/person";
import {ResolverResponse} from "../constants/resolver-response.constants";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public admins : Person[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.admins = response[ResolverResponse.admins];
    });
  }

}
