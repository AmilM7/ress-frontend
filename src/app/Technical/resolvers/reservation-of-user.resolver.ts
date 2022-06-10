import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Reservation} from "../../models/reservation";
import {ReservationServices} from "../services/reservation.service";
import {ProfileService} from "../services/profile.services";

@Injectable({providedIn: 'root'})
export class ReservationsResolverOfUser implements Resolve<Reservation[]> {

  constructor(private reservationService:ReservationServices,
              private profileService: ProfileService,) {
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Reservation[]> | Promise<Reservation[]> | Reservation[]{
    const id =  this.profileService.getProfile()?.id;
    return this.reservationService.getReservationsByUser(id);   //number is one because we do not know which user until we do authorization
  }
}


