import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation";
import {environment} from "../../environments/environment";



@Injectable()
export class ReservationServices {
  private readonly baseUrl:string  =  environment.backendUrl + '/reservations';

  constructor(private http:HttpClient) {
  }

  public getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.baseUrl);
  }

  public getReservationsByUser(id: string | undefined): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.baseUrl}/userID/${id}`)
  }


  public getReservationsByRestaurant(id: number): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(`${this.baseUrl}/restaurantID/${id}`)
  }


  public updateReservationApproved(reservation: Reservation, id: string): Observable<Reservation>{
    return this.http.put<Reservation>(`${this.baseUrl}/update/${id}`,reservation);
  }

  public updateReservationDenied(reservation: Reservation, id: string): Observable<Reservation>{
    return this.http.put<Reservation>(`${this.baseUrl}/update2/${id}`,reservation);
  }

  public create(reservation:Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(`${this.baseUrl}`, reservation);
  }

}
