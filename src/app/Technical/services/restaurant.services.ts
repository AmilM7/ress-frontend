import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "../../models/restaurant";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {RestaurantDto} from "../../models/dtos/restaurant.dto";

@Injectable()
export class RestaurantServices {
  private readonly baseUrl: string = environment.backendUrl + '/restaurants';

  constructor(private http: HttpClient) {
  }

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl);
  }

  public getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/${id}`);
  }

  public getRestaurantsNotAccepted(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + "/notAccepted");
  }

  public getMostlyReserved(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + "/mostlyReserved");
  }

  public getSuggestedRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + "/suggested");
  }

  public create(restaurant: RestaurantDto): Observable<RestaurantDto> {
    return this.http.post<Restaurant>(`${this.baseUrl}`, restaurant);
  }

  public updateIsAcceptedToTrue(email: string, restaurant: Restaurant): Observable<Restaurant> {
    return this.http.put<Restaurant>(`${this.baseUrl}/update/${email}`, restaurant);
  }

  public deleteRestaurant(email: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${email}`)
  }

}



