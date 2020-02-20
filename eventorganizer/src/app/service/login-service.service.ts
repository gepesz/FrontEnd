import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../interfaces/user-response';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly SERVER_URL = environment.serverUrl;

  private loggedIn = new BehaviorSubject<boolean>(false);
  public currentUser: BehaviorSubject<User>;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.http.get<UserResponse>(
      this.SERVER_URL + '/currentuser',
      {withCredentials: true}
    ).subscribe(resp => this.setLoggedIn(resp.success) );
  }

  logIn(uname: string, pwd: string): Observable<Object> {
    let fd = new FormData();
    fd.append('username', uname);
    fd.append('password', pwd);
    return this.http.post<Object>(
      this.SERVER_URL +  "/login",
      fd,
      { withCredentials: true },
    );
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigateByUrl("/home");
  }

  setLoggedIn(loggedIn: boolean): void{
    this.loggedIn.next(loggedIn);
  }

}
