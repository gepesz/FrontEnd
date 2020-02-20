import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {
  
  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) {
     this.users = []
  }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }
  
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
