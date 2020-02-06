import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  
  public isCollapsed = true;
  
  @Input()
  user: User;
  

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
