import {Type} from "./type.enum";

export interface Restaurant {
  id:string,
  name:string;
  location:string;
  numOfAvailGuests: number;
  numOfAvailTables:number;
  description:string;
  contactNum:string;
  startHour:string;
  endHour:string;
  email:string;
  contactManager:string;
  type:Type;
  password:string;
  confirmPassword:string;
}


