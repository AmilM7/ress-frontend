import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Restaurant} from "../models/restaurant";
import {ActivatedRoute} from "@angular/router";
import {ResolverResponse} from "../constants/resolver-response.constants";
import {Person} from "../models/person";
import {PersonDto} from "../models/dtos/person.dto";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})


export class UserDashboardComponent implements OnInit {

  public allRestaurants: Restaurant[] = [];
  public topThreeMosltyReservedRestaurants: Restaurant[] = [];
  public suggestedRestaurants: Restaurant[] = [];
  public namesOfRestaurants: string[] = [];
  public searchText: string = "";

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.allRestaurants = response[ResolverResponse.restaurants];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.topThreeMosltyReservedRestaurants = response[ResolverResponse.mostlyReservedRestaurants];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.suggestedRestaurants = response[ResolverResponse.suggestedRestaurants];
    });

    for (let i = 0; i < this.allRestaurants.length; i++) {
      this.namesOfRestaurants.push(this.allRestaurants[i].name)
    }
  }


  isChecked(): boolean {
    return this.searchText != "";
  };


}
