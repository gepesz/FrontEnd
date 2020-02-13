import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventService } from 'src/app/service/event.service';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/interfaces/event';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  private environment = environment
  public isCollapsed = true;
  myEvent: Event[];
  eventSubscription: Subscription;
  @Input()
  user: User;
  

  constructor(private userService: UserService,private router: Router,private http: HttpClient,private eventservice: EventService) {
    this.user = {
      username: '',
    }
    this.myEvent = []
   }

  onFileChanged(event) {
    let uploadData = new FormData();
    uploadData.append('image', event.target.files[0]);
    this.userService.sendPhoto(uploadData)
      .subscribe(resp => window.location.reload(),
                error => alert('Nem megfelelő formátumú a kép.'));
  }

  /*async goToUserProfile(){
    let myUser : User;
    let clicdUser = this.user.id;
    this.userService.getMyUser().subscribe(resp => myUser = resp.user);
    
    
    if(clicdUser == myUser.id){
      this.router.navigate(['/users/my-profile']);
    }else{
      this.router.navigate(['/users/clicdUser/user-profile']);
    }
  }*/

  getEvents(){
    this.eventSubscription = this.eventservice.getMyEvents(this.user.id)
      .subscribe(events => this.myEvent = events)
  }

  ngOnInit() {
    
  }

}
