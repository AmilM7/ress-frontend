import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Restaurant} from "../models/restaurant";
import {Observable} from 'rxjs';
import {RestaurantServices} from "../services/restaurant.services";
import {Routex} from "../constants/constants";


@Injectable({providedIn: 'root'})
export class RestaurantResolver implements Resolve<Restaurant> {

  constructor(private restaurantService: RestaurantServices) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Restaurant> | Promise<Restaurant> | Restaurant {
    const id = route.paramMap.get(Routex.restaurant.substring(1));
    const restaurant = this.restaurantService.getRestaurant(id!);
    if (!restaurant) {
      throw "Restaurant not found";
    }
    return restaurant;
  }
}



