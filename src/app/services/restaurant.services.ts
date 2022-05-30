import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../models/restaurant";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class RestaurantServices {
  private readonly baseUrl:string  = environment.backendUrl + '/restaurants';

  constructor(private http:HttpClient) {
  }
  public getRestaurants():Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl);
  }

  getRestaurant(id:string): Observable<Restaurant>{
    return this.http.get<Restaurant>(`${this.baseUrl}/${id}`);
  }

  getRestaurantsNotAccepted(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.baseUrl + "/notAccepted");
  }

  create(restaurant: Restaurant):Observable<Restaurant> {
    return  this.http.post<Restaurant>(`${this.baseUrl}`, restaurant);
  }
}



