import {Type} from "./type.enum";

export interface Restaurant {
  id: string,
  name: string;
  location: string;
  numOfAvailGuests: number;
<<<<<<< HEAD
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
=======
  numOfAvailTables: number;
  ressDescription: string;
  contactNum: string;
  startHour: string;
  endHour: string;
  email: string;
  contactManager: string;
  type: Type;
  password: string;
>>>>>>> e782825b79e62b62462d715bd6e96fd002e0b448
}


