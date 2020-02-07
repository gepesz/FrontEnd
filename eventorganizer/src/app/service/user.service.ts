import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: BehaviorSubject<User[]>
  private readonly USERS_URL = "http://192.168.1.53:8080/users";
  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
  }
  
  private updateUsers(response: UserResponse){
    if(response.success){
      this.users.next(response.users);
    }
  }

  getUsers(): Observable<User[]> {
    this.http.get<UserResponse>(this.USERS_URL, {withCredentials: true})
      .subscribe(resp => this.updateUsers(resp));
      console.log("this.users")
       return this.users;
       
  }
  
  
  getUser(id:number): Observable<UserResponse> {
    //TODO
    return this.http.get<UserResponse>(this.USERS_URL +  '?id=' + id ,{withCredentials: true});
  }

}
