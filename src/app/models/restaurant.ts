import {RestaurantInterface} from "./interfaces/restaurant.interface";

export interface Restaurant extends RestaurantInterface{
  confirmPassword:string;
  id: string;
}


