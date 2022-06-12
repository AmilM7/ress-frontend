import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../../models/restaurant";
import {Person} from "../../../models/person";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../../Technical/services/profile.services";
import {ResolverResponse} from "../../../Technical/constants/resolver-response.constants";
import {Routex} from "../../../Technical/constants/constants";

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
  public person: Person | undefined;
  public name: string | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private profileService: ProfileService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.allRestaurants = response[ResolverResponse.accepted];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.topThreeMosltyReservedRestaurants = response[ResolverResponse.mostlyReservedRestaurants];
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.suggestedRestaurants = response[ResolverResponse.suggestedRestaurants];
    });

    this.person = this.profileService.getProfile();

    for (let i = 0; i < this.allRestaurants.length; i++) {
      this.namesOfRestaurants.push(this.allRestaurants[i].name)
    }
  }

  isChecked(): boolean {
    return this.searchText != "";
  };

  public onEnter() {
    for (let restaurant of this.allRestaurants) {
      if (restaurant.name === this.searchText) {
        this.router.navigate([Routex.restaurantView + "/" + restaurant.id]);
      }
    }

  }
}
