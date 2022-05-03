import {Type} from "./type.enum";

export interface Event {
  id: string;
  restaurant_name: string;
  event_name: string;
  date: string;
  type: Type;
}


