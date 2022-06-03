import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/person";
import {PersonDto} from "../models/dtos/person.dto";
import {environment} from "../../environments/environment";
import {Reservation} from "../models/reservation";

@Injectable()
export class AdminService {
  private readonly baseUrl:string  =  environment.backendUrl + '/admin';

  constructor(private http:HttpClient) {
  }
  public getUsers():Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  getUser(id:string): Observable<Person>{
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  create(user: PersonDto): Observable<PersonDto> {
    return this.http.post<PersonDto>(`${this.baseUrl}`, user);
  }

  public updateUser(user: Person, id: string): Observable<Person>{
    return this.http.put<Person>(`${this.baseUrl}/update/${id}`,user);
  }
}
