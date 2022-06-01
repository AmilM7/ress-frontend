import {Type} from "../type.enum";

export interface RestaurantInterface{
  name: string;
  location: string;
  numOfAvailGuests: number;
  confirmPassword: string;
  numOfAvailTables: number;
  ressDescription: string;
  contactNum: string;
  startHour: string;
  endHour: string;
  email: string;
  contactManager: string;
  type: Type;
  password: string;

}
