import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/person";

@Injectable()
export class AdminService {
  private readonly baseUrl:string  = 'http://localhost:8080/admin';

  constructor(private http:HttpClient) {
  }
  public getUsers():Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  getUser(id:string): Observable<Person>{
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }
}
