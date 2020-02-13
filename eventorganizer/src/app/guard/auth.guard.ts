import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginServiceService } from 'src/app/service/login-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.loginService.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            return false;
          }
          return true;
        })
      )
  }

}
