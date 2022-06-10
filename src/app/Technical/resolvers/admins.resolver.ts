import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {Person} from "../../models/person";
import {AdminService} from "../services/admin.service";


@Injectable({providedIn: 'root'})
export class AdminsResolver implements Resolve<Person[]> {

  constructor(private adminService:AdminService) {
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Person[]> | Promise<Person[]> | Person[]{
    return this.adminService.getUsers();
  }
}
