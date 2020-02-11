import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Constants } from '../interfaces/constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly SERVER_URL = Constants.hostName +  "/login";

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) { }

  logIn(uname: string, pwd: string): Observable<Object> {
    console.log(Constants.hostName)
    let fd = new FormData();
    fd.append('username', uname);
    fd.append('password', pwd);
    this.loggedIn.next(true);
    return this.http.post<Object>(
      this.SERVER_URL,
      fd,
      { withCredentials: true },
    );
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigateByUrl("/home");
  }
}
