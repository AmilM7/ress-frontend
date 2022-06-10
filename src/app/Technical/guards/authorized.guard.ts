import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/auth.services";

@Injectable()
export class AuthorizedGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
  ) {
  }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfValidToken();
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkIfValidToken();
  }

  private checkIfValidToken(): Observable<boolean> {
    const token = this.authService.getToken();
    if (!token) {

      this.authService.goToLogin()

      return of(false);
    }

    return of(true);
  }
}
