import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../interfaces/user-response';
import { Constants } from '../interfaces/constants';
import { UsersResponse } from '../interfaces/users-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private users: BehaviorSubject<User[]>
  private readonly SERVER_URL = Constants.hostName;
  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
  }
  
  private updateUsers(response: UsersResponse){
    if(response.success){
      this.users.next(response.users);
    }
  }

  register(user:User){
     return this.http.post(this.SERVER_URL + "/register", user);
  }

  getUsers(): Observable<User[]> {
    this.http.get<UsersResponse>(this.SERVER_URL + "/users" , {withCredentials: true})
      .subscribe(resp => this.updateUsers(resp));
      return this.users;
       
  }
  
  
  getUser(id:number): Observable<UserResponse> {
    //TODO
    return this.http.get<UserResponse>(this.SERVER_URL +  '/users/' + id ,{withCredentials: true});
  }

  getMyUser(): Observable<UserResponse>{
    return this.http.get<UserResponse>(this.SERVER_URL + '/users/myprofile' , {withCredentials:true});
  }

}
