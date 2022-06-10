import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Reservation} from "../../models/reservation";
import {ReservationServices} from "../services/reservation.service";


@Injectable({providedIn: 'root'})
export class ReservationsResolver implements Resolve<Reservation[]> {

  constructor(private reservationService:ReservationServices) {
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Reservation[]> | Promise<Reservation[]> | Reservation[]{
    return this.reservationService.getReservations();
  }
}
