import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Event} from "../../models/event";
import {environment} from "../../../environments/environment";

@Injectable()
export class EventServices {
  private readonly baseUrl : string = environment.backendUrl + "/events";

  constructor(private http:HttpClient) {}

  public getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.baseUrl)
  }
}
