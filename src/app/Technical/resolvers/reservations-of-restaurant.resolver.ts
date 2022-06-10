import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Reservation} from "../../models/reservation";
import {ReservationServices} from "../services/reservation.service";

@Injectable({providedIn: 'root'})
export class ReservationsResolverOfUser implements Resolve<Reservation[]> {

  constructor(private reservationService:ReservationServices) {
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Reservation[]> | Promise<Reservation[]> | Reservation[]{
    return this.reservationService.getReservationsByRestaurant(1);   //number is one because we do not know which user until we do authorization
  }
}

