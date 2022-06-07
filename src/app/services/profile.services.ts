import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {mergeMap, Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

import {Router} from '@angular/router';
import {Routex} from "../constants/constants";
import {AuthResponse} from "../models/auth/auth-response.interface";
import {SignInForm} from "../models/auth/sign-in-form.interface";
import {Person} from "../models/person";


@Injectable()
export class ProfileService {

  private readonly baseUrl: string = `${environment.backendUrl}/profile`;

  private profile: Person | undefined;


  constructor(
    private http: HttpClient
  ) {
  }

  public getProfile(): Person | undefined {
    return this.profile;
  }

  public fetchProfile(): Observable<void> {
    return this.http.get<Person>(`${this.baseUrl}`).pipe(
      mergeMap(response => {
        this.profile = response;
        return of(undefined);
      })
    );
  }



}
