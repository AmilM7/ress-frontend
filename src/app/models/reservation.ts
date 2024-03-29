import {PersonInterface} from "./interfaces/person.interface";
import {RestaurantInterface} from "./interfaces/restaurant.interface";
import {Restaurant} from "./restaurant";
import {Person} from "./person";

export interface Reservation{
  id: string;
  numberOfGuests: number;
  time: string;
  tableId: string;
  day: string;
  date: string;
  user: Person;
  restaurant: Restaurant;
  approval: string;
  description: string;
}
