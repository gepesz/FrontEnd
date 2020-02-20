import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  user:User;
  events:Event[];

  constructor(private userService: UserService) {
    this.user = {
      username:'',
      id:0
    }
   }

  ngOnInit() {
    this.userService.getMyUser().subscribe(user => this.user = user.user);
    this.events = this.user.Events;
  }
}
