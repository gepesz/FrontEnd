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

  constructor(private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    //TODO most be van írva hogy az egyes id-ju felhasználót kérje le.
    //const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(1).subscribe(resp => {
      this.user = resp.users[0];
      this.events = this.user.Events
    })
  }

}
