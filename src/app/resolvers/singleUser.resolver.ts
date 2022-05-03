import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Routex} from "../constants/constants";
import {Person} from "../models/person";
import {AdminService} from "../services/admin.service";


@Injectable({providedIn: 'root'})
export class SingleUserResolver implements Resolve<Person> {

  constructor(private adminService: AdminService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Person> | Promise<Person> | Person {
    const id = route.paramMap.get(Routex.singleUser.substring(1));
    const user = this.adminService.getUser(id!);
    if (!user) {
      throw "User not found";
    }
    return user;
  }
}
