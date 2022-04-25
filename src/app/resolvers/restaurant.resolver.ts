import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Restaurant} from "../models/restaurant";
import {Observable} from 'rxjs';
import {RestaurantServices} from "../services/restaurant.services";


@Injectable({providedIn: 'root'})
export class RestaurantResolver implements Resolve<Restaurant[]> {

 constructor(private restaurantService:RestaurantServices) {
 }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Restaurant[]> | Promise<Restaurant[]> | Restaurant[]{
    return this.restaurantService.getRestaurants();
  }
}
