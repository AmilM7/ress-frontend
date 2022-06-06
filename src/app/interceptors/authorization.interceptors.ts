import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {AuthService} from "../services/auth.services";
import {catchError, Observable, throwError} from "rxjs";
import {Provider} from "@angular/core";

export const provideAuthorizationInterceptor = (): Provider => [{
  provide: HTTP_INTERCEPTORS,
  useClass: class implements HttpInterceptor {
    constructor(
      private authService: AuthService,
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.authService.getToken();
      if (!token) {
        return next.handle(req);
      }

      const clone = req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      });

      return next.handle(clone).pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.authService.goToLogin();
          }

          return throwError(err);
        })
      );
    }
  },
  multi: true,
  deps: [AuthService]
}];
