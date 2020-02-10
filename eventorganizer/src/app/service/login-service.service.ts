import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../interfaces/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly SERVER_URL = Constants.hostName +  "/login";

  constructor(private http: HttpClient) { }

  logIn(uname: string, pwd: string): Observable<Object> {
    console.log(Constants.hostName)
    let fd = new FormData();
    fd.append('username', uname);
    fd.append('password', pwd);
    return this.http.post<Object>(
      this.SERVER_URL,
      fd,
      { withCredentials: true }
    );
  }
}
