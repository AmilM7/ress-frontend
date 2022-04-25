import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../models/restaurant";
import {Observable} from "rxjs";

@Injectable()
export class RestaurantServices {
  private readonly baseUrl:string  = 'http://localhost:8080/restaurants';

  constructor(private http:HttpClient) {
  }
  public getRestaurants():Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl);
  }

}
