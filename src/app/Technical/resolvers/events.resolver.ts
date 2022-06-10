import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Event} from "../../models/event";
import {EventServices} from "../services/event.services";

@Injectable({providedIn: 'root'})
export class EventsResolver implements Resolve<Event[]> {

  constructor(private eventService: EventServices) {
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
  Observable<Event[]> | Promise<Event[]> | Event[]{
    return this.eventService.getEvents();
  }
}
