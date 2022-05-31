import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation";


@Injectable()
export class ReservationServices {
  private readonly baseUrl:string  = 'http://localhost:8080/reservations';

  constructor(private http:HttpClient) {
  }

  public getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.baseUrl);
  }

  public updateReservationApproved(reservation: Reservation, id: string): Observable<Reservation>{
    return this.http.put<Reservation>(`${this.baseUrl}/update/${id}`,reservation);
  }

  public updateReservationDenied(reservation: Reservation, id: string): Observable<Reservation>{
    return this.http.put<Reservation>(`${this.baseUrl}/update2/${id}`,reservation);
  }

}
