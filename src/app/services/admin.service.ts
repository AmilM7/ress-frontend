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
  private readonly baseUrl2:string  =  environment.backendUrl + '/profile';

  constructor(private http:HttpClient) {
  }
  public getUsers():Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  public getUser(id:string): Observable<Person>{
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  public getAuthenticatedUser(): Observable<Person>{
    return this.http.get<Person>(this.baseUrl2);
  }

  public create(user: PersonDto): Observable<PersonDto> {
    return this.http.post<PersonDto>(`${this.baseUrl}`, user);
  }

  public updateUser(user: { firstName: string; lastName: string; password: string; phone: string; email: string }, id: string): Observable<Person>{
    return this.http.put<Person>(`${this.baseUrl}/update/${id}`,user);
  }
}
