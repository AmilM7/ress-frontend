import {Type} from "./type.enum";

export interface Restaurant {
  id:string,
  name:string;
  location:string;
  numOfAvailGuests: number;
  numOfAvailTables:number;
  ressDescription:string;
  contactNum:string;
  startHour:string;
  endHour:string;
  email:string;
  contactManager:string;
  type:Type;
  password:string;
}


