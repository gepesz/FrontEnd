import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly SERVER_URL = environment.serverUrl +  "/login";

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {
    
  }

  logIn(uname: string, pwd: string): Observable<Object> {
    let fd = new FormData();
    fd.append('username', uname);
    fd.append('password', pwd);
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

  getLogIn(){
    this.loggedIn.next(true);
  }
}
