import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Routex} from "../constants/constants";
import {Person} from "../../models/person";
import {AdminService} from "../services/admin.service";

@Injectable({providedIn: 'root'})
export class PersonUniqueResolver implements Resolve<Person> {

  constructor(private personService: AdminService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Person> | Promise<Person> | Person {
    const person = this.personService.getAuthenticatedUser();
    if (!person) {
      throw "User not found";
    }
    return person;
  }
}
