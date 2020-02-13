import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  events : Event[];

  constructor(private route: ActivatedRoute,private userService: UserService) { 
    this.user = {
      username: '',
      id: 0,
    }
  }

  ngOnInit() {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(resp => {
      this.user = resp.user;
      this.events = this.user.Events
    })
  }

}
